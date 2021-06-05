import {ScopeObject} from './ScopeObject';

export class ScopeResultSet {
    // eslint-disable-next-line no-undef
    public childNodes: ChildNode[];
    constructor(public object: ScopeObject, public fragment: DocumentFragment, public startComment: Comment, public endComment: Comment) {
        // eslint-disable-next-line no-undef
        this.childNodes = [];
        for (let i = 0; i < fragment.childNodes.length; i++) {
            this.childNodes.push(fragment.childNodes[i]);
        }
    }
}
