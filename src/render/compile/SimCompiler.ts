import {Scope} from './Scope';
import {Runnable} from '../../run/Runnable';

export class SimCompiler implements Runnable {
    public root: Scope | undefined;
    constructor(private raws: string, private obj: any, public config = {start: '{%', end: '%}'}) {
    }

    run(): SimCompiler {
        this.root = new Scope(this.raws, this.obj, this.config);
        return this;
    }
}
