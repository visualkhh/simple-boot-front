import {Module} from 'simple-boot-core/module/Module'
import {SimstanceManager} from 'simple-boot-core/simstance/SimstanceManager'
import {ConstructorType} from 'simple-boot-core/types/Types'
import {SimGlobal} from 'simple-boot-core/global/SimGlobal';
import {SimFrontOption} from '../option/SimFrontOption';
import {SimProxy} from 'simple-boot-core/proxy/SimProxy';
import {FrontModule} from '../module/FrontModule';

export class SimFrontProxyHandler extends SimProxy {
    private simstanceManager?: SimstanceManager;

    constructor(private simOption: SimFrontOption) {
        super()
        this.simstanceManager = SimGlobal().application?.simstanceManager;
    }

    public set(obj: any, prop: string, value: any): boolean {
        if (obj instanceof FrontModule) {
            // 참조하는 Module에 리턴시켜준다.
            obj._refModule.get(prop)?.forEach((it, val) => {
                it.forEach(sit => sit.callBack.apply(val, sit.params));
            });
            try {
                const sim = this.simstanceManager?.getOrNewSim(obj.constructor as ConstructorType<Module>)
                if (sim && sim instanceof FrontModule) {
                    sim.renderToScope(prop)
                } else {
                    obj.renderToScope(prop)
                }
            } catch (e) {
                obj.renderToScope(prop)
            }
        }
        return true
    }
}
