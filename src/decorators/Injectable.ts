import {ConstructorType, GenericClassDecorator} from '../types/Types'
import {SimGlobal} from '../global/SimGlobal';
import {ReflectUtils} from '../util/reflect/ReflectUtils';

// export enum SimConfigType {
//     advice = 'advice'
// }

export interface InjectableConfig {
    scheme?: string,
}

const InjectorbleMetadataKey = Symbol('Injectable');
export const Injectable = (config?: InjectableConfig): GenericClassDecorator<ConstructorType<any>> => {
    return (target: ConstructorType<any>) => {
        ReflectUtils.defineMetadata(InjectorbleMetadataKey, config, target);
    }
}

export const getInjectable = (target: ConstructorType<any> | Function | any): InjectableConfig | undefined => {
    if (typeof target === 'object') {
        target = target.constructor;
    }
    try {
        return ReflectUtils.getMetadata(InjectorbleMetadataKey, target);
    } catch (e) {
    }
}
