import {ConstructorType, GenericClassDecorator, MethodParameter} from '../types/Types'
import {ReflectUtils} from '../util/reflect/ReflectUtils';
import {FunctionUtils} from "../util/function/FunctionUtils";

const InjectMetadataKey = Symbol('Inject');
export const Inject = (type?: ConstructorType<any>): MethodParameter => {
    return (target: Object, propertyKey: string | symbol | undefined, parameterIndex: number) => {
        // const existingInjectdParameters: number[] = Reflect.getOwnMetadata(InjectMetadataKey, target, propertyKey) || [];
        // existingInjectdParameters.push(parameterIndex);
        // console.log(target, propertyKey, parameterIndex, existingInjectdParameters);
        if (!propertyKey || typeof target === 'function') {
            propertyKey = FunctionUtils.getParameterNames(target as Function)[parameterIndex];
        } else if (propertyKey && typeof target === 'object') {
            target = (target as any)[propertyKey];
            propertyKey = FunctionUtils.getParameterNames(target as Function)[parameterIndex];
        }
        ReflectUtils.defineMetadata(InjectMetadataKey, type, target, propertyKey);
        // Reflect.defineMetadata( requiredMetadataKey, existingRequiredParameters, target, propertyKey);
    }
}

export const getInject = (target: ConstructorType<any> | Function | any, propertyKey: string): ConstructorType<any> | undefined => {
    // console.log('000>>', target, typeof target)
    // const constructor = target.constructor;

    if (typeof target === 'object') {
        target = target.constructor;
    }
    try {
        return ReflectUtils.getMetadata(InjectMetadataKey, target, propertyKey);
        // return Reflect.getMetadata(SimMetadataKey, target.prototype);
    } catch (e) {
    }
}
