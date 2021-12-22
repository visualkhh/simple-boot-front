import { ConstructorType, GenericClassDecorator } from 'simple-boot-core/types/Types';
import { ReflectUtils } from 'simple-boot-core/utils/reflect/ReflectUtils';

export const componentSelectors = new Map<string, ConstructorType<any>>();
export interface ComponentConfig {
    selector?: string,
    template?: string,
    styles?: (string)[],
    using?: (ConstructorType<any>)[],
    // instances?: Map<string, any> // { [name: string]: ConstructorType<any> }
}

export const ComponentMetadataKey = Symbol('Component');

//Partial<ComponentConfig>
export const Component = (config?: ComponentConfig): GenericClassDecorator<ConstructorType<any>> => {
    return (target: ConstructorType<any>) => {
        if (!config) {
            config = {}
        }
        if (!config.selector) {
            config.selector = target.name;
        }
        ReflectUtils.defineMetadata(ComponentMetadataKey, config, target);
        componentSelectors.set(config.selector.toLowerCase(), target);
        // console.log('component----> target1', target)
        // console.log('component----> target2', ReflectUtils.getMetadata(ComponentMetadataKey, target))
        // return class extends target{};
        // return target;
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

export const getComponent = (target: ConstructorType<any> | Function | any): ComponentConfig | undefined => {
    if (target && typeof target === 'object') {
        target = target.constructor;
    }
    try {
        return ReflectUtils.getMetadata(ComponentMetadataKey, target);
    } catch (e) {
    }
}
