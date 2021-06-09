import {Scope} from './Scope';
import {Runnable} from '../../run/Runnable';
import {ScopePosition} from './ScopePosition';
import {RandomUtils} from '../../util/random/RandomUtils';

export class SimCompiler implements Runnable {
    public root: Scope | undefined;
    constructor(public raws: string, private obj: any, private rootUUID = RandomUtils.uuid(), public config = {start: '<!--%', end: '%-->'}) {
    }

    run(): SimCompiler {
        this.root = new Scope(this.raws, this.obj, this.rootUUID, this.config, new ScopePosition(0, this.raws.length));
        return this;
    }
}
