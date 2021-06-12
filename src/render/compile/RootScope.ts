import {Scope} from './Scope';

export enum TargetNodeMode {
    // eslint-disable-next-line no-unused-vars
    child = 'child',
    // eslint-disable-next-line no-unused-vars
    replace = 'replace'
}

// export type TargetNode = { node: Node, mode: TargetNodeMode };
export class TargetNode {
    constructor(private _node: Node | string = document, public mode = TargetNodeMode.child) {
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

    setScanUsingVar() {
        // root not using variable
    }

// constructor(raws: string, obj: any, uuid: string, config: { start: string; end: string }, position: ScopePosition) {
    //     super(raws, obj, uuid, config, position);
    // }
}
