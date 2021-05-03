import 'reflect-metadata'
import {ConstructorType} from '../types/Types'
import {NoSuchSim} from '../throwable/NoSuchSim'
import {SimProxyHandler} from '../proxy/SimProxyHandler'
import {Module} from '../module/Module'
import {getPostConstruct, SimConfig} from '../decorators/SimDecorator';
import {Renderer} from '../render/Renderer';
import {SimOption} from '../option/SimOption';
import {Runnable} from '../run/Runnable';
import {SimGlobal} from '../global/SimGlobal';
import {ObjectUtils} from '../util/object/ObjectUtils';
import {SimstanceAtomic} from './SimstanceAtomic';

export class SimstanceManager implements Runnable {
    private _storage = new Map<ConstructorType<any>, any>()
    private _simProxyHandler: SimProxyHandler;

    constructor(option: SimOption) {
        this._storage.set(SimstanceManager, this);
        this._storage.set(SimOption, option);
        const renderer = new Renderer(option);
        this._storage.set(Renderer, renderer);
        this._simProxyHandler = new SimProxyHandler(this, renderer);
    }

    get storage(): Map<ConstructorType<any>, any> {
        return this._storage
    }

    getSimConfig(scheme: string | undefined): SimstanceAtomic<any>[] {
        if (scheme) {
            return Array.from(this._storage.keys()).map(it => new SimstanceAtomic(it)).filter(it => {
                return it && scheme === it?.config?.scheme;
            }) || [];
        } else {
            return [];
        }
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

    register(target: ConstructorType<any>, config?: SimConfig): void {
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
        throw new NoSuchSim('no simple instance')
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
        const set = new Set(ObjectUtils.getAllProtoTypeName(r));
        // console.log('------>', r, set)
        set.forEach(it => {
            const postConstruct = getPostConstruct(r, it);
            // console.log('------>', it, postConstruct)
            if (postConstruct) {
                (r as any)[it](...this.getParameterSim(r, it))
            }
        })
        return this.proxy(r, Module);
    }

    public getParameterSim(target: Object, targetKey?: string | symbol): any[] {
        let paramTypes: any[];
        if (targetKey) {
            paramTypes = Reflect.getMetadata('design:paramtypes', target, targetKey) || [];
        } else {
            paramTypes = Reflect.getMetadata('design:paramtypes', target) || [];
        }
        const injections = paramTypes.map((token: ConstructorType<any>) => {
            return this.resolve<any>(token)
        })
        return injections;
    }

    public proxy<T>(target: T, type?: ConstructorType<any>): T {
        if ((type ? target instanceof type : true) && (!('isProxy' in target))) {
            for (const key in target) {
                target[key] = this.proxy(target[key], type);
            }
            return new Proxy(target, this._simProxyHandler);
        } else {
            return target;
        }
    }

    run() {
        SimGlobal.storage.forEach((data, key, map) => {
            this.register(key, data);
        })
        // console.log('---', this._storage)
    }
}
