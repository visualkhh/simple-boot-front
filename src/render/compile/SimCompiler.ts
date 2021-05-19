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

    // getResult(): string {
    //     // if (this.root) {
    //     //     return this.raws.replace(this.config.start + this.root. + this.config.end, scopeObject.writes)
    //     // } else {
    //     //     return this.raws;
    //     // }
    // }
}
