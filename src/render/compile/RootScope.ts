import {Scope} from './Scope';
import {ScopePosition} from './ScopePosition';
import {ScopeRawSet} from './ScopeRawSet';
import {ScopeResultSet} from './ScopeResultSet';
import {RandomUtils} from '../../util/random/RandomUtils';

export enum TargetNodeMode {
    // eslint-disable-next-line no-unused-vars
    child = 'child',
    // eslint-disable-next-line no-unused-vars
    replace = 'replace'
}

export class TargetNode {
    constructor(private _node: Node | string = document.body, public mode = TargetNodeMode.child) {
    }

    get node(): Node | Element | null {
        if (typeof this._node === 'string') {
            return document.querySelector(this._node);
        } else {
            return this._node;
        }
    }
}

export class RootScope extends Scope {
    public targetNode: TargetNode = new TargetNode();

    constructor(public rawSet: ScopeRawSet, obj: any, uuid: string, config: { start: string; end: string }, position: ScopePosition = new ScopePosition(0, rawSet.raw.length)) {
        super(rawSet.raw, obj, uuid, config, position);
    }

    executeFragment(option?: {head?: Node, tail?: Node, childElementAttr?: Map<string, string>}) {
        const templateElement = document.createElement('template');
        templateElement.innerHTML = this.raws;
        const rawFragment = templateElement.content;
        // console.log('executeFragment ', rawFragment.childNodes.length)
        this.childs.forEach(it => {
            const childScopeObject = it.exec().result;
            // const childScopeObject = it.scopeResult!
            const currentNode = this.extracted(rawFragment, it, childScopeObject);
            // childScopeObject.fragment.childNodes.forEach(it => {
            //     if (it.nodeType === Node.ELEMENT_NODE) {
            //         (it as Element).setAttribute('module-id', this.uuid);
            //     }
            // })
            if (option?.head) {
                childScopeObject.fragment.prepend(option?.head)
            }
            if (option?.tail) {
                childScopeObject.fragment.append(option?.tail)
            }
            currentNode?.parentNode?.replaceChild(childScopeObject.fragment, currentNode);
            /*
                let currentNode = nodeIterator.nextNode();
                while (currentNode = nodeIterator.nextNode()) {...}
             */
        });

        // styles
        if (this.rawSet.styles.length > 0) {
            const styleScope = new RootScope(new ScopeRawSet(this.rawSet.styles.join(' ')), this.obj, RandomUtils.uuid(), this.config); // , {start: '/*%', end: '%*/'};
            const styleFragment = styleScope.executeFragment();
            styleScope.childs.forEach(it => this.childs.push(it));
            const style = document.createElement('style');
            style.appendChild(styleFragment);
            rawFragment.prepend(style);
        }
        if (option?.childElementAttr && option?.childElementAttr?.size > 0) {
            rawFragment.childNodes.forEach(it => {
                if (it.nodeType === Node.ELEMENT_NODE) {
                    option?.childElementAttr?.forEach((v, k) => {
                        (it as Element).setAttribute(k, v);
                    })
                }
            })
        }
        return rawFragment;
    }

    private extracted(rawFragment: DocumentFragment, it: Scope, childScopeObject: ScopeResultSet) {
        const nodeIterator = document.createNodeIterator(
            rawFragment,
            NodeFilter.SHOW_COMMENT,
            {
                acceptNode: (node) => {
                    const coment = (node as Comment).data.replace(/[\r\n]/g, '');
                    const b = coment.startsWith('%') && coment.endsWith('%') && coment === ('%' + it.raws.replace(/[\r\n]/g, '') + '%');
                    return b ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
                }
            }
        )

        const currentNode = nodeIterator.nextNode();
        currentNode?.parentNode?.insertBefore(childScopeObject.startComment, currentNode);
        currentNode?.parentNode?.insertBefore(childScopeObject.endComment, currentNode.nextSibling);
        return currentNode;
    }
}
