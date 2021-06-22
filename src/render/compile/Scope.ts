import {ScopeObject} from './ScopeObject';
import {ScopePosition} from './ScopePosition';
import {RandomUtils} from '../../util/random/RandomUtils';
import {ScopeResultSet} from './ScopeResultSet';

export class Scope {
    public childs: Scope[] = [];
    public usingVars: string[] = [];
    public scopeResult?: ScopeResultSet;

    constructor(private raws: string, private obj: any, public uuid = RandomUtils.uuid(), private config = {start: '<!--%', end: '%-->'}, private position = new ScopePosition(0, raws.length)) {
        this.run();
    }

    childIsContain() {
        for (let i = 0; i < this.childs.length; i++) {
            if (this.childs[i].scopeResult?.startComment.isConnected) {
                return true;
            }
        }
        return false;
    }
    // clenResults() {
    //     if (!this.scopeResult?.startComment.isConnected) {
    //         console.log('scope clenResults->', this.scopeResult)
    //         this.scopeResult = undefined;
    //     }
    //     this.childs.forEach(it => {
    //         it.clenResults();
    //     })
    //     this.childs = this.childs.filter(it => it.scopeResult);
    // }

    // executeFragment(): {fragment: DocumentFragment, scopeObjects: ScopeObject[]} {
    executeFragment(option?: {head?: Node, tail?: Node}) {
        const templateElement = document.createElement('template');
        templateElement.innerHTML = this.raws;
        const rawFragment = templateElement.content;
        // console.log('executeFragment ', rawFragment.childNodes.length)
        this.childs.forEach(it => {
            const childScopeObject = it.exec().result;
            // const childScopeObject = it.scopeResult!
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

            const currentNode = nodeIterator.nextNode();
            currentNode?.parentNode?.insertBefore(childScopeObject.startComment, currentNode);
            currentNode?.parentNode?.insertBefore(childScopeObject.endComment, currentNode.nextSibling);
            // childScopeObject.fragment.childNodes.forEach(it => {
            //     if (it.nodeType === Node.ELEMENT_NODE) {
            //         (it as Element).setAttribute('module-id', this.uuid);
            //     }
            // })
            if(option?.head) {
                childScopeObject.fragment.prepend(option?.head)
            }
            if(option?.tail) {
                childScopeObject.fragment.append(option?.tail)
            }
            currentNode?.parentNode?.replaceChild(childScopeObject.fragment, currentNode);
            /*
                let currentNode = nodeIterator.nextNode();
                while (currentNode = nodeIterator.nextNode()) {...}
             */
        })
        // const scopeObjects: ScopeObject[] = [];
        rawFragment.childNodes.forEach(it => {
            if (it.nodeType === Node.ELEMENT_NODE) {
                (it as Element).setAttribute('scope-id', this.uuid);
            }
        })
        return rawFragment;
    }

    exec(obj: any = this.obj) {
        const scopeObject = new ScopeObject();
        // scopeObject.eval(this.raws, obj);
        const object = Object.assign(scopeObject, obj) as ScopeObject
        this.scopeResult = object.executeResultSet(this.raws);
        return {object, result: this.scopeResult};
    }

    private run(): Scope {
        // const targetRaws = this.raws.substring(this.config.start.length, this.raws.length - this.config.end.length);
        const targetRaws = this.raws;
        this.setScanUsingVar();

        let i = this.indexOf(targetRaws, this.config.start);
        while (i !== -1) {
            const startIdx = i;
            let endIdx = this.tailIndexOf(targetRaws, this.config.end, i);
            while (endIdx !== -1) {
                const sub = targetRaws.substring(startIdx, endIdx);
                const matchStart = sub.match(RegExp(this.config.start, 'gm')) || [];
                const matchEnd = sub.match(RegExp(this.config.end, 'gm')) || [];
                if (matchStart.length === matchEnd.length) {
                    const scope = new Scope(sub.substring(this.config.start.length, sub.length - this.config.end.length), this.obj, RandomUtils.uuid(), this.config, new ScopePosition(startIdx, endIdx));
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

    public setScanUsingVar() {
        // using variable search
        const varRegexStr = 'this\\.([a-zA-Z_$][a-zA-Z_.$0-9]*)';
        const varRegex = RegExp(varRegexStr, 'gm');
        let varExec = varRegex.exec(this.raws)
        this.usingVars = [];
        while (varExec) {
            this.usingVars.push(varExec[1]);
            varExec = varRegex.exec(varExec.input)
        }
    }
}
