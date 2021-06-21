import {ScopeObject, ScopeObjectCalls} from './ScopeObject';

export class ScopeResultSet {
    // eslint-disable-next-line no-undef
    public childNodes: ChildNode[];
    constructor(public uuid: string, public object: ScopeObject, public fragment: DocumentFragment, public startComment: Comment, public endComment: Comment, public calls: ScopeObjectCalls = []) {
        // eslint-disable-next-line no-undef
        this.childNodes = [];
        for (let i = 0; i < fragment.childNodes.length; i++) {
            this.childNodes.push(fragment.childNodes[i]);
        }
    }

    public childAllRemove() {
        let next = this.startComment.nextSibling;
        while (next) {
            if (next === this.endComment) {
                break;
            }
            next.remove();
            next = this.startComment.nextSibling;
        }
    }
}
