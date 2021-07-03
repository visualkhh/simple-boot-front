import {Module} from 'simple-boot-core/module/Module'
import {SimstanceManager} from 'simple-boot-core/simstance/SimstanceManager'
import {ConstructorType} from 'simple-boot-core/types/Types'
import {SimGlobal} from 'simple-boot-core/global/SimGlobal';
import {getTargetAndIncludeNullAndSortExceptionHandlers} from 'simple-boot-core/decorators/exception/ExceptionDecorator';
import {SimFrontOption} from '../option/SimFrontOption';
import {getProtoAfters, getProtoBefores} from 'simple-boot-core/decorators/aop/AOPDecorator';
import {ObjectUtils} from 'simple-boot-core/utils/object/ObjectUtils';
import {SimProxy} from 'simple-boot-core/proxy/SimProxy';
import {FrontModule} from '../module/FrontModule';

export class SimFrontProxyHandler extends SimProxy {
    private simstanceManager?: SimstanceManager;

    constructor(private simOption: SimFrontOption) {
        super()
        this.simstanceManager = SimGlobal().application?.simstanceManager;
    }

    public get(target: any, name: string): any {
        // this.aopBefore(AOPAction.get, target, name, target[name]);
        // setTimeout(() => this.aopAfter(AOPAction.get, target, name, target[name]), 1)
        return target[name]
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

    defineProperty?(target: any, p: PropertyKey, attributes: PropertyDescriptor): boolean {
        return true
    }

    apply(target: Function, thisArg: any, argumentsList?: any): any {
        let r;
        try {
            this.aopBefore(thisArg, target);
            r = target.apply(thisArg, argumentsList);
            this.aopAfter(thisArg, target);
        } catch (e: Error | any) {
            const inHandler = getTargetAndIncludeNullAndSortExceptionHandlers(thisArg, e)
            if (inHandler.length > 0) {
                inHandler[inHandler.length - 1].call(e, thisArg, target, argumentsList);
            } else {
                for (let i = 0; i < this.simOption.advice.length; i++) {
                    const sim = this.simstanceManager?.getOrNewSim(this.simOption.advice[i]);
                    const inHandler = getTargetAndIncludeNullAndSortExceptionHandlers(sim, e)
                    if (inHandler.length > 0) {
                        inHandler[inHandler.length - 1].call(e, thisArg, target, argumentsList);
                        break;
                    }
                }
            }
            console.error(e)
        }
        return r
    }

    private aopBefore(obj: any, protoType: Function) {
        const propertyName = ObjectUtils.getPrototypeName(obj, protoType);
        if (propertyName) {
            getProtoBefores(obj, propertyName).forEach(it => {
                it.call(obj, protoType, propertyName)
            })

            for (let i = 0; i < this.simOption.advice.length; i++) {
                const sim = this.simstanceManager?.getOrNewSim(this.simOption.advice[i]);
                const protoBefores = getProtoBefores(sim, propertyName, Object.getPrototypeOf(obj));
                protoBefores.forEach(it => {
                    it.call(obj, protoType, propertyName)
                })
            }
        }
    }

    private aopAfter(obj: any, protoType: Function) {
        const propertyName = ObjectUtils.getPrototypeName(obj, protoType);
        if (propertyName) {
            getProtoAfters(obj, propertyName).forEach(it => {
                it.call(obj, protoType, propertyName)
            })

            for (let i = 0; i < this.simOption.advice.length; i++) {
                const sim = this.simstanceManager?.getOrNewSim(this.simOption.advice[i]);
                const protoBefores = getProtoAfters(sim, propertyName, Object.getPrototypeOf(obj));
                protoBefores.forEach(it => {
                    it.call(obj, protoType, propertyName)
                })
            }
        }
    }
}
