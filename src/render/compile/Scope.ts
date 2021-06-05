import {ScopeObject} from './ScopeObject';
import {ScopePosition} from './ScopePosition';
import {RandomUtils} from '../../util/random/RandomUtils';
import {ScopeResultSet} from './ScopeResultSet';

export class Scope {
    public childs: Scope[] = [];
    public usingVars: string[] = [];
    public uuid = RandomUtils.uuid();
    public scopeResult?: ScopeResultSet;

    constructor(private raws: string, private obj: any, private config = {start: '{%', end: '%}'}, private position = new ScopePosition(0, raws.length)) {
        this.run();
    }

    /** @deprecated */
    public execResult(): string {
        let result = this.raws;
        // this.childs.forEach(it => {
        //     this.scopeObject = it.exec();
        //     result = result.replace(this.config.start + it.raws + this.config.end, this.scopeObject.commentWrites)
        // })
        return result;
    }

    // executeTemplateElement(): {templateElement: HTMLTemplateElement, scopeObjects: ScopeObject[]} {
    //     const templateElement = document.createElement('template');
    //     templateElement.innerHTML = this.execResult();
    //     const scopeObjects: ScopeObject[] = [];
    //     // templateElement.
    //     // this.childs.forEach(it => {
    //     //     document.createNodeIterator(
    //     //         templateElement,
    //     //         NodeFilter.SHOW_COMMENT,
    //     //         {
    //     //             acceptNode: (node) => {
    //     //                 console.log('node-->', node)
    //     //                 return NodeFilter.FILTER_ACCEPT;
    //     //             }
    //     //         }
    //     //     );
    //     // })
    //     return {templateElement, scopeObjects};
    // }

    executeFragment(): {fragment: DocumentFragment, scopeObjects: ScopeObject[]} {
        const templateElement = document.createElement('template');
        templateElement.innerHTML = this.raws;
        // const templateElement = document.createElement('template');
        // templateElement.innerHTML = '<!--zzz--> <a>a</a> wow  <!-- a333333aa -->'
        const rawFragment = templateElement.content;
        console.log('executeFragment ', rawFragment.childNodes.length)

        this.childs.forEach(it => {
            it.exec();
            const childScopeObject = it.scopeResult!

            const nodeIterator = document.createNodeIterator(
                rawFragment,
                NodeFilter.SHOW_COMMENT,
                {
                    acceptNode: (node) => {
                        const coment = (node as Comment).data;
                        const b = coment.startsWith('%') && coment.endsWith('%') && coment === ('%' + it.raws + '%');
                        return b ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
                    }
                }
            )

            let currentNode: Node | null;
            // eslint-disable-next-line no-cond-assign
            while (currentNode = nodeIterator.nextNode()) {
                // currentNode?.parentNode?.insertBefore(childScopeObject.startComment, currentNode.nextSibling)
                // currentNode?.insertBefore(childScopeObject.startComment, currentNode.nextSibling);
                currentNode?.parentNode?.insertBefore(childScopeObject.startComment, currentNode);
                currentNode?.parentNode?.insertBefore(childScopeObject.endComment, currentNode.nextSibling);
                currentNode?.parentNode?.replaceChild(childScopeObject.fragment, currentNode);
                // currentNode?.parentNode?.replaceChild(this.scopeObject.renderFragment(), currentNode);
                // console.log('------>', currentNode.textContent)
            };
        })
        // const nodeIterator = document.createNodeIterator(
        //     data,
        //     NodeFilter.SHOW_COMMENT,
        //     {
        //         acceptNode: (node) => {
        //             const coment = (node as Comment).data;
        //             return coment.startsWith('%') && coment.endsWith('%') ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
        //         }
        //     }
        // );

        // console.log('--->', nodeIterator)

        const scopeObjects: ScopeObject[] = [];
        return {fragment: rawFragment, scopeObjects: scopeObjects};
    }

    //
    // // eslint-disable-next-line no-undef
    // executeChildNodes(): {childNodes: ChildNode[], scopeObjects: ScopeObject[]} {
    //     const data = this.executeChildNodeList();
    //     // eslint-disable-next-line no-undef
    //     const childNodes: ChildNode[] = [];
    //     for (let i = 0; i < data.childNodes.length; i++) {
    //         childNodes.push(data.childNodes[i]);
    //     }
    //     return {childNodes, scopeObjects: data.scopeObjects};
    // }

    exec(obj: any = this.obj) {
        const scopeObject = new ScopeObject();
        // scopeObject.eval(this.raws, obj);
        const target = Object.assign(scopeObject, obj) as ScopeObject
        this.scopeResult = target.executeResultSet(this.raws);
    }

    // newScopeObject(obj: any = this.obj) {
    //     const scopeObject = new ScopeObject();
    //     // scopeObject.eval(this.raws, obj);
    //     const target = Object.assign(scopeObject, obj) as ScopeObject
    //     return target;
    // }

    private run(): Scope {
        // const targetRaws = this.raws.substring(this.config.start.length, this.raws.length - this.config.end.length);
        const targetRaws = this.raws;
        // using variable search
        const varRegexStr = 'this\\.([a-zA-Z_$.]*)';
        const varRegex = RegExp(varRegexStr, 'gm');
        let varExec = varRegex.exec(targetRaws)
        this.usingVars = [];
        while (varExec) {
            this.usingVars.push(varExec[1]);
            varExec = varRegex.exec(varExec.input)
        }

        let i = this.indexOf(targetRaws, this.config.start);
        while (i !== -1) {
            const startIdx = i;
            let endIdx = this.tailIndexOf(targetRaws, this.config.end, i);
            while (endIdx !== -1) {
                const sub = targetRaws.substring(startIdx, endIdx);
                const matchStart = sub.match(RegExp(this.config.start, 'gm')) || [];
                const matchEnd = sub.match(RegExp(this.config.end, 'gm')) || [];
                if (matchStart.length === matchEnd.length) {
                    const scope = new Scope(sub.substring(this.config.start.length, sub.length - this.config.end.length), this.obj, this.config, new ScopePosition(startIdx, endIdx));
                    this.childs.push(scope);
                    // this.childs.push(new Scope(sub, this.config));
                    break;
                }
                // console.log(matchStart, matchEnd)
                // console.log(sub)
                endIdx = this.tailIndexOf(targetRaws, this.config.end, endIdx);
            }

            if (endIdx !== -1) {
                i = this.indexOf(targetRaws, this.config.start, endIdx)
            } else {
                break;
            }
        }
        // console.log('idx', this.position)
        return this;
    }

    public indexOf(data: string, searchString: string, position?: number): number {
        return data.indexOf(searchString, position);
    }

    public tailIndexOf(data: string, searchString: string, position?: number): number {
        const number = data.indexOf(searchString, position);
        return number !== -1 ? number + searchString.length : number;
    }
}
