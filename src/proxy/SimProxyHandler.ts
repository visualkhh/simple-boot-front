import {Module} from '../module/Module'
import {SimstanceManager} from '../simstance/SimstanceManager'
import {ConstructorType} from '../types/Types'
import {Renderer} from '../render/Renderer'
import {SimGlobal} from '../global/SimGlobal';
import {Sim} from '../decorators/SimDecorator';

@Sim()
export class SimProxyHandler implements ProxyHandler<any> {
    private simstanceManager?: SimstanceManager;
    constructor(private renderer: Renderer) {
        this.simstanceManager = SimGlobal.application?.simstanceManager;
    }

    public get(target: any, name: string): any {
        return target[name]
    }

    public set(obj: any, prop: string, value: any): boolean {
        value = this.simstanceManager?.proxy(value, Module)

        obj[prop] = value
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
            try {
                // 격리변수들.. 부분 갱신만 우선시한다.
                // let i = 0;
                const targetSelector = `module-isolate='${prop}'`
                const elementNodeListOf = obj.findChildAttributeElements(targetSelector);
                if (elementNodeListOf && elementNodeListOf.length > 0) {
                    const temp = document.createElement('div')
                    temp.innerHTML = obj.template;
                    const tempElements = temp.querySelectorAll(`[${targetSelector}]`)
                    elementNodeListOf.forEach((it, key) => {
                        this.renderer.renderInnerHTML(it, tempElements[key].innerHTML, obj);
                        (obj as any).addEvent(it);
                    });
                    return true;
                }
            } catch (e) {
            }

            try {
                const sim = this.simstanceManager?.getOrNewSim(obj.constructor as ConstructorType<Module>)
                if (sim) {
                    sim.render();
                } else {
                    obj.render();
                }
            } catch (e) {
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

    apply(target: any, thisArg: any, argumentsList?: any): any {
        return target.apply(thisArg, argumentsList)
    }

    has(target: any, key: PropertyKey): boolean {
        if (key === 'isProxy') {
            return true
        }
        return key in target
    }
}
