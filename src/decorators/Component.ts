import { ConstructorType, GenericClassDecorator } from 'simple-boot-core/types/Types';
import { ReflectUtils } from 'simple-boot-core/utils/reflect/ReflectUtils';

export const componentSelectors = new Map<string, ConstructorType<any>>();
export interface ComponentConfig {
    selector?: string,
    template?: string,
    styles?: (string)[],
    using?: (ConstructorType<any>)[],
}

export const ComponentMetadataKey = Symbol('Component');

// Partial<ComponentConfig>
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
    }
}

export const getComponent = (target: ConstructorType<any> | Function | any): ComponentConfig | undefined => {
    if (target && typeof target === 'object') {
        target = target.constructor;
    }
    try {
        return ReflectUtils.getMetadata(ComponentMetadataKey, target);
    } catch (e) {
    }
}
