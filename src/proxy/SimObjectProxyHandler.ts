import {Module} from '../module/Module'

export class SimObjectProxyHandler implements ProxyHandler<any> {
    public simObjectProxyHandler_refModule = new Map<string, Module>();

    public get(target: any, name: string): any {
        if (name === 'simObjectProxyHandler_refModule') {
            return this.simObjectProxyHandler_refModule;
        } else {
            return target[name]
        }
    }

    public set(obj: any, prop: string, value: any): boolean {
        obj[prop] = value
        this.simObjectProxyHandler_refModule.forEach((module, key) => {
            module._refModule.get(key)?.forEach((sit, m) => {
                m.renderToScope(sit);
            })
        })
        return true
    }

    has(target: any, key: PropertyKey): boolean {
        if (key === 'isProxy') {
            return true
        }
        return key in target
    }
}
