import { ConstructorType, GenericClassDecorator } from 'simple-boot-core/types/Types';
import { ReflectUtils } from 'simple-boot-core/utils/reflect/ReflectUtils';
import { SimGlobal } from 'simple-boot-core/global/SimGlobal';

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
    // if (!SimGlobal().data.components) {
    //     SimGlobal().data.components = {
    //         storage: new Map<string, ConstructorType<any>>(),
    //         getComponentInstance: (tagName: string, uuid: string) => {
    //             // console.log('----------?', tagName, uuid)
    //             const components = SimGlobal().data.components.storage.get(tagName);
    //             const componentsOption = getComponent(components);
    //             // console.log('getComponent------', componentsOption?.instances?.get(uuid))
    //             return componentsOption?.instances?.get(uuid);
    //         }}
    // }
    // const component = SimGlobal().data.components;
    // console.log('component', SimGlobal().data)
    return (target: ConstructorType<any>) => {
        if (config?.selector) {
            componentSelectors.set(config?.selector, target);
        }
        ReflectUtils.defineMetadata(ComponentMetadataKey, config, target);
        return class extends target {
            __componentInstances =  {}
        }
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
