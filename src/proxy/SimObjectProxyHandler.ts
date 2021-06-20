import {Module} from '../module/Module'

export class SimObjectProxyHandler implements ProxyHandler<any> {
    // 다중 string 변수명도 허용되도록 해야될까?
    public simObjectProxyHandler_refModule = new Map<string, Module>();

    public get(target: any, name: string, receiver: any): any {
        // let value = Reflect.get(target, name, receiver);
        // if (name === 'set' && typeof value === 'function') {
        //     // When `proxy.set` is accessed, return your own
        //     // fake implementation that logs the arguments, then
        //     // calls the original .set() behavior.
        //     const origSet = value;
        //     value = function (key: any, value: any) {
        //         console.log(key, value);
        //         return origSet.apply(target, arguments);
        //     };
        // }
        // return value;

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
