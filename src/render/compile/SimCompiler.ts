import {Runnable} from '../../run/Runnable';
import {ScopePosition} from './ScopePosition';
import {RandomUtils} from '../../util/random/RandomUtils';
import {RootScope} from './RootScope';

export class SimCompiler implements Runnable {
    public root: RootScope | undefined;
    constructor(public raws: string, private obj: any, private rootUUID = RandomUtils.uuid(), public config = {start: '<!--%', end: '%-->'}) {
    }

    run(): SimCompiler {
        this.root = new RootScope(this.raws, this.obj, this.rootUUID, this.config, new ScopePosition(0, this.raws.length));
        return this;
    }
}
