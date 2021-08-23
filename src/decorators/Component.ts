import { ConstructorType, GenericClassDecorator } from 'simple-boot-core/types/Types';
import { ReflectUtils } from 'simple-boot-core/utils/reflect/ReflectUtils';


export interface ComponentConfig {
    template?: string,
    styles?: (string)[],
    modules?: { [name: string]: ConstructorType<any> }
}

export const ComponentMetadataKey = Symbol('Component');

export const Component = (config?: ComponentConfig): GenericClassDecorator<ConstructorType<any>> => {
    return (target: ConstructorType<any>) => {
        ReflectUtils.defineMetadata(ComponentMetadataKey, config, target);
    }
}
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
