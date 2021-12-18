import { ConstructorType, GenericClassDecorator } from 'simple-boot-core/types/Types';
import { ReflectUtils } from 'simple-boot-core/utils/reflect/ReflectUtils';
import { ScriptRunnable } from 'script/ScriptRunnable';

export const scripts = new Map<string, ConstructorType<ScriptRunnable>>();
export interface ScriptConfig {
    name?: string,
    using?: (ConstructorType<any>)[],
}

export const ScriptMetadataKey = Symbol('Script');

//Partial<ComponentConfig>
export const Script = (config?: ScriptConfig): GenericClassDecorator<ConstructorType<ScriptRunnable>> => {
    return (target: ConstructorType<any>) => {
        //default set
        if (!config) {
            config = {}
        }
        if (!config.name) {
            config.name = target.name;
        }
        scripts.set(config.name, target);
        ReflectUtils.defineMetadata(ScriptMetadataKey, config, target);
        // const application = SimGlobal().application as SimpleBootFront;
        // const optionalParams = SimGlobal();
        // console.log('llllll', optionalParams, optionalParams._application);
        // Object.entries(optionalParams).forEach(it => {
        //     console.log(it[0], it[1])
        // })
        return target;
        // return class extends target {
        //     __componentInstances =  {}
        // }
    }
}

// function classDecorator<T extends {new(...args:any[]):{}}>(constructor:T) {
//     return class extends constructor {
//         newProperty = "new property";
//         hello = "override";
//     }
// }
// export const TestComponent = (c: ConstructorType<any>) => {
//     return class extends c {
//         wow = 'zz'
//     }
// }
// Component.create = <T>(obj: T, raws?: RawSet): T => {
//     return SimGlobal().application.createDomRender(obj, raws);
// }

export const getScript = (target: ConstructorType<any> | Function | any): ScriptConfig | undefined => {
    if (target && typeof target === 'object') {
        target = target.constructor;
    }
    try {
        return ReflectUtils.getMetadata(ScriptMetadataKey, target);
    } catch (e) {
    }
}
