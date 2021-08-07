import { ConstructorType, GenericClassDecorator } from 'simple-boot-core/types/Types';
import { ReflectUtils } from 'simple-boot-core/utils/reflect/ReflectUtils';
import { SimGlobal } from 'simple-boot-core/global/SimGlobal';
import { DomRender, RawSet } from 'dom-render/DomRender';

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
Component.create = <T>(obj: T, raws?: RawSet): T => {
    if (raws) {
        return DomRender.proxy(obj, raws, SimGlobal().application.domRendoerExcludeProxy);
    } else {
        return SimGlobal().application.option.proxy?.onProxy(obj);
    }
}

export const getComponent = (target: ConstructorType<any> | Function | any): ComponentConfig | undefined => {
    if (typeof target === 'object') {
        target = target.constructor;
    }
    try {
        return ReflectUtils.getMetadata(ComponentMetadataKey, target);
    } catch (e) {
    }
}
