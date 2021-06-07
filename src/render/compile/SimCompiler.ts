import {Scope} from './Scope';
import {Runnable} from '../../run/Runnable';
import {ScopePosition} from './ScopePosition';

export class SimCompiler implements Runnable {
    public root: Scope | undefined;
    constructor(public raws: string, private obj: any, public config = {start: '<!--%', end: '%-->'}) {
    }

    run(): SimCompiler {
        this.root = new Scope(this.raws, this.obj, this.config, new ScopePosition(0, this.raws.length));
        return this;
    }
}
