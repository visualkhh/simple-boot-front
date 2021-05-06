import {ConstructorType} from '../types/Types';
import {SimGlobal} from '../global/SimGlobal';
import {getSim, SimConfig} from '../decorators/SimDecorator';
import {SimstanceManager} from './SimstanceManager';

export class SimAtomic<T> {
    constructor(public type: ConstructorType<T>,
                private simstanceManager: SimstanceManager = SimGlobal.application?.simstanceManager!
    ) {
    }

    get config(): SimConfig | undefined {
        return getSim(this.type);
    }

    get value(): T | undefined {
        return this.simstanceManager?.getOrNewSim(this.type);
    }
}
