import {ConstructorType, GenericClassDecorator, MethodParameter} from '../types/Types'
import {SimGlobal} from '../global/SimGlobal';
import {ReflectUtils} from '../util/reflect/ReflectUtils';
import {FunctionUtils} from "../util/function/FunctionUtils";

// export enum SimConfigType {
//     advice = 'advice'
// }

// export interface InjectConfig {
//     scheme?: string,
//     type?: ConstructorType<any>,
// }

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

// export const Inject = (config?: InjectConfig): MethodParameter => {
//     return (target: Object, propertyKey: string | symbol, parameterIndex: number) => {
//         console.log(target, propertyKey, parameterIndex);
//     }
// }
// export const Inject = (config?: InjectConfig): MethodParameter => {
//     return (target, propertyKey, parameterIndex) => {
//         console.log(target, propertyKey, parameterIndex);
//     }
// }
// export const getSim = (target: ConstructorType<any> | Function | any): SimConfig | undefined => {
//     // console.log('000>>', target, typeof target)
//     // const constructor = target.constructor;
//
//     if (typeof target === 'object') {
//         target = target.constructor;
//     }
//     try {
//         return ReflectUtils.getMetadata(SimMetadataKey, target);
//         // return Reflect.getMetadata(SimMetadataKey, target.prototype);
//     } catch (e) {
//     }
// }

// // const postConstructMetadataKey = Symbol('PostConstruct');
// const PostConstructMetadataKey = Symbol('PostConstruct');
// // export const PostConstruct = (data: any = {}) => {
// export const PostConstruct = (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
//     ReflectUtils.defineMetadata(PostConstructMetadataKey, PostConstructMetadataKey, target, propertyKey);
// }
// export const getPostConstruct = (target: any, propertyKey: string): any => {
//     return ReflectUtils.getMetadata(PostConstructMetadataKey, target, propertyKey);
//     // return Reflect.getMetadata('wow', target, propertyKey);
// }
