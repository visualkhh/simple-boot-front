import {Module} from '../module/Module'
import {SimstanceManager} from '../simstance/SimstanceManager'
import {ConstructorType} from '../types/Types'
import {Renderer} from '../render/Renderer'
import {SimGlobal} from '../global/SimGlobal';
import {Sim} from '../decorators/SimDecorator';
import {getTargetAndIncludeNullAndSortExceptionHandlers} from '../decorators/exception/ExceptionDecorator';
import {SimOption} from '../option/SimOption';
import {getProtoAfters, getProtoBefores} from '../decorators/aop/AOPDecorator';
import {ObjectUtils} from '../util/object/ObjectUtils';

@Sim()
export class SimProxyHandler implements ProxyHandler<any> {
    private simstanceManager?: SimstanceManager;

    constructor(private simOption: SimOption, private renderer: Renderer) {
        this.simstanceManager = SimGlobal.application?.simstanceManager;
    }

    public get(target: any, name: string): any {
        // this.aopBefore(AOPAction.get, target, name, target[name]);
        // setTimeout(() => this.aopAfter(AOPAction.get, target, name, target[name]), 1)
        return target[name]
    }

    public set(obj: any, prop: string, value: any): boolean {
        // console.log('proxy set-->')
        value = this.simstanceManager?.proxy(value, Module)
        // this.aopBefore(AOPAction.set, obj, prop, value);
        obj[prop] = value
        // this.aopAfter(AOPAction.set, obj, prop, value);
        /*
        if ('isProxy' in obj && obj instanceof Module) {
            obj.render()
        } else if
         */
        if (obj instanceof Module) {
            // const type = Reflect.getMetadata('design:type', obj);
            // obj.
            // Object.get
            // console.log('------>', obj, getSim(obj));
            // console.log('------>', obj, getSim(Object.getPrototypeOf(obj)))
            // 격리변수들.. 부분 갱신만 우선시한다.
            // try {
            //     const targetSelector = `module-isolate='${prop}'`
            //     const elementNodeListOf = obj.findChildAttributeElements(targetSelector);
            //     if (elementNodeListOf && elementNodeListOf.length > 0) {
            //         const temp = document.createElement('span')
            //         temp.innerHTML = obj.template;
            //         const tempElements = temp.querySelectorAll(`[${targetSelector}]`)
            //         elementNodeListOf.forEach((it, key) => {
            //             this.renderer.renderInnerHTML(it, tempElements[key].innerHTML, obj);
            //             (obj as any).addEvent(it);
            //         });
            //         return true;
            //     }
            // } catch (e) {
            // }

            try {
                const sim = this.simstanceManager?.getOrNewSim(obj.constructor as ConstructorType<Module>)
                if (sim) {
                    console.log('proxy --> sim, ', 'props:', prop, 'scope:', sim._scope);
                    // sim.render();
                    sim.renderToScope(prop)
                } else {
                    console.log('proxy --> else, ', 'props:', prop, 'scope:', obj._scope);
                    obj.render();
                }
            } catch (e) {
                console.log('proxy --> catch, ', 'props:', prop, 'scope:', obj._scope);
                obj.render();
            }

            // const formatMetadataKey = Symbol('ChildView');
            // const metadata = Reflect.metadata(formatMetadataKey, obj);
            // console.log('--->', metadata);
        }
        // for (const key in obj) {
        //     if (obj[key] instanceof Module) {
        //         obj[key].render();
        //     }
        // }

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

    has(target: any, key: PropertyKey): boolean {
        if (key === 'isProxy') {
            return true
        }
        return key in target
    }
}
