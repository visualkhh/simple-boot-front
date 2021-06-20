import 'reflect-metadata'
import {ConstructorType} from '../types/Types'
import {SimNoSuch} from '../throwable/SimNoSuch'
import {SimProxyHandler} from '../proxy/SimProxyHandler'
import {Module} from '../module/Module'
import {getPostConstruct, PostConstruct} from '../decorators/SimDecorator';
import {SimOption} from '../option/SimOption';
import {Runnable} from '../run/Runnable';
import {SimGlobal} from '../global/SimGlobal';
import {ObjectUtils} from '../util/object/ObjectUtils';
import {SimAtomic} from './SimAtomic';
import {ReflectUtils} from '../util/reflect/ReflectUtils';
import {FunctionUtils} from '../util/function/FunctionUtils';
import {getInject} from '../decorators/Inject';
import {SimObjectProxyHandler} from '../proxy/SimObjectProxyHandler';

export class SimstanceManager implements Runnable {
    private _storage = new Map<ConstructorType<any>, any>()
    // private _simProxyHandler: SimProxyHandler;
    private simProxyHandler: SimProxyHandler | undefined;

    constructor(option: SimOption) {
        this._storage.set(SimstanceManager, this);
        this._storage.set(SimOption, option);
        // const renderer = new Renderer(option);
        // this._storage.set(Renderer, renderer);
        // this._simProxyHandler = new SimProxyHandler(this, renderer);
    }

    get storage(): Map<ConstructorType<any>, any> {
        return this._storage
    }

    getSimAtomics(): SimAtomic<any>[] {
        return Array.from(this._storage.keys()).map(it => new SimAtomic(it, this));
    }

    getSimConfig(scheme: string | undefined): SimAtomic<any>[] {
        return this.getSimAtomics().filter(it => scheme && it && scheme === it?.config?.scheme) || [];
    }

    // this.resolve(k) exception 내야하나..? throws... 안쪽에서 undifined해야되는거 아닌가?
    // 아니다 익명 Module이 있을수 있으니 매번 오류메시지 낼필요없다.
    getOrNewSim<T>(k?: ConstructorType<T>): T | undefined {
        if (k) {
            let newVar = this.storage.get(k)
            if (!newVar) {
                newVar = this.resolve(k)
            }
            return newVar
        }
    }

    getOrNewSims<T>(k: ConstructorType<T>): T[] {
        const list = new Array<T>(0);
        this.storage.forEach((value, key, mapObject) => {
            let sw = false;
            if (value && value instanceof k) {
                sw = true;
                // eslint-disable-next-line no-prototype-builtins
            } else if (key === k || k.isPrototypeOf(key)) {
                sw = true;
            }
            if (sw) {
                if (!value) {
                    value = this.resolve(key);
                }
                list.push(value);
            }
        })
        return list;
    }

    register(target: ConstructorType<any>): void {
        if (!this._storage.has(target)) {
            this._storage.set(target, undefined)
        }
    }

    resolve<T>(target: ConstructorType<any>): T {
        const registed = this._storage.get(target)
        if (registed) {
            return registed as T
        }

        if (this._storage.has(target) && undefined === registed) {
            const r = this.newSime(target)
            this._storage.set(target, r)

            // object in module proxy
            if (r instanceof Module) {
                this.moduleObjectPropProxy(r);
            }

            return r
        }
        throw new SimNoSuch('no simple instance ' + target)
    }

    public newSime<T>(target: ConstructorType<T>): T {
        const r = new target(...this.getParameterSim(target))

        // console.log('newSim-->', r, this.getAllProtoTypeName(r))
        // console.log('newSim-->', r, Object.getOwnPropertyNames(target.prototype))
        // console.log('newSim--11>', Object.keys(Object.getPrototypeOf(target)))
        // // console.log('newSim--11>', Object.getPrototypeOf(target))
        // console.log('newSim--22>', Object.keys(Object.getPrototypeOf(target.prototype)))
        // console.log('newSim--33>', Object.getPrototypeOf(Object.getPrototypeOf(target.prototype)))
        // if (target.prototype?.prototype) {
        //     console.log('newSim--33>', r, Object.getPrototypeOf(target.prototype.prototype))
        // }
        // const prototypeOf = Object.keys(Object.getPrototypeOf(target.prototype));
        // console.log('------>', r, set)
        this.callBindPostConstruct(r);
        return this.proxy(r, Module);
    }

    public callBindPostConstruct(obj: any) {
        const set = new Set(ObjectUtils.getAllProtoTypeName(obj));
        set.forEach(it => {
            const postConstruct = getPostConstruct(obj, it);
            // console.log('------>', it, postConstruct)
            if (postConstruct) {
                (obj as any)[it](...this.getParameterSim(obj, it))
            }
        })
    }

    public getParameterSim(target: Object, targetKey?: string | symbol): any[] {
        const paramTypes = ReflectUtils.getParameterTypes(target, targetKey);
        const paramNames = FunctionUtils.getParameterNames(target, targetKey);
        const injections = paramTypes.map((token: ConstructorType<any>, idx: number) => {
            target = targetKey ? (target as any)[targetKey] : target;
            const inject = getInject(target, paramNames[idx]);
            return this.resolve<any>(inject ?? token)
        })
        return injections;
    }

    @PostConstruct
    public post(simProxyHandler: SimProxyHandler) {
        this.simProxyHandler = simProxyHandler;
    }

    /**
     * @deprecated
     */
    public proxy<T>(target: T, type?: ConstructorType<any>): T {
        if (this.simProxyHandler && (type ? target instanceof type : true) && (!('isProxy' in target))) {
            for (const key in target) {
                // console.log('target->', target, key)
                target[key] = this.proxy(target[key], type);
            }
            const protoTypeName = ObjectUtils.getProtoTypeName(target);
            // console.log('proxy-->', target, protoTypeName)
            protoTypeName.forEach(it => {
                (target as any)[it] = new Proxy((target as any)[it], this.simProxyHandler!);
            });
            target = new Proxy(target, this.simProxyHandler);
        }
        return target;
    }

    public moduleObjectPropProxy(target: Module): Module {
        // console.log('isProxy-->', ('isProxy' in target));
        // if (target instanceof Object && !('isProxy' in target)) {
        for (const key in target) {
            const prop = (target as any)[key];
            if (prop instanceof Module) {
                this.moduleObjectPropProxy(prop)
            } else if (prop && typeof prop === 'object' && !(prop instanceof Map)) {
                // console.log(prop);
                if (!('isProxy' in prop)) {
                    (target as any)[key] = new Proxy(prop, new SimObjectProxyHandler());
                }
                const _refModule = ((target as any)[key]).simObjectProxyHandler_refModule;
                if (_refModule) {
                    _refModule.set(key, target)
                }
                // console.log('----->', _refModule)
                // console.log('kk-->', target, (target as any).id, (target as any)[key], ',', key, ('isProxy' in prop))
            }
            // target[key] = this.moduleProxy(target[key]);
        }

        // if (!target instanceof Module && target instanceof Object) {
        //
        // }
        //     const protoTypeName = ObjectUtils.getProtoTypeName(target);
        //     protoTypeName.forEach(it => {
        //         if (target instanceof Module) {
        //             (target as any)[it] = new Proxy((target as any)[it], this.simProxyHandler!);
        //         } else if (target instanceof Object) {
        //             target = new Proxy(target, new SimObjectProxyHandler());
        //         }
        //     });
        //
        //     if (target instanceof Module) {
        //         target = new Proxy(target, this.simProxyHandler!);
        //     } else if (target instanceof Object) {
        //         target = new Proxy(target, new SimObjectProxyHandler());
        //     }
        // }
        return target;
    }

    run() {
        SimGlobal.storage.forEach(data => {
            this.register(data);
        })
        this.callBindPostConstruct(this);
        // console.log('---', this._storage)
    }
}
