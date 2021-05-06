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
            return r
        }
        throw new SimNoSuch('no simple instance')
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
        const injections = paramTypes.map((token: ConstructorType<any>) => {
            return this.resolve<any>(token)
        })
        return injections;
    }

    @PostConstruct
    public post(simProxyHandler: SimProxyHandler) {
        this.simProxyHandler = simProxyHandler;
    }

    public proxy<T>(target: T, type?: ConstructorType<any>): T {
        if (this.simProxyHandler && (type ? target instanceof type : true) && (!('isProxy' in target))) {
            for (const key in target) {
                target[key] = this.proxy(target[key], type);
            }
            const allProtoTypeName = ObjectUtils.getAllProtoTypeName(target);
            allProtoTypeName.forEach(it => {
                // console.log('proxy protoType', target, it);
                (target as any)[it] = new Proxy((target as any)[it], this.simProxyHandler!);
            });
            target = new Proxy(target, this.simProxyHandler);
        }
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
