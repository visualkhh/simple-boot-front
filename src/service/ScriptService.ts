import {Sim} from 'simple-boot-core/decorators/SimDecorator'
import { ScriptRunnable } from '../script/ScriptRunnable';
import { scripts } from '../decorators/Script';
import { SimstanceManager } from 'simple-boot-core/simstance/SimstanceManager';
@Sim()
export class ScriptService {
    constructor(private simstanceManager: SimstanceManager) {
    }

    public getScript<T = ScriptRunnable>(name: string): T | undefined {
        const val = scripts.get(name)
        let obj: any = undefined;
        if (val) {
            try {
                obj = this.simstanceManager.getOrNewSim(val);
            } catch (e) {
                obj = this.simstanceManager.newSim(val)
            }
        }
        return obj;
    }
}
