import {ConstructorType} from '../../types/Types';
import {ReflectUtils} from '../../util/reflect/ReflectUtils';
import {MetaDataPropertyAtomic} from '../MetaDataAtomic';
import {ObjectUtils} from '../../util/object/ObjectUtils';

const ExceptionHandlerMetadataKey = Symbol('ExceptionHandler');
// export const ExceptionHandler = (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
//     // return ReflectUtils.metadata(ExceptionHandlerMetadataKey, target ?? null);
//     ReflectUtils.defineMetadata(ExceptionHandlerMetadataKey, ExceptionHandlerMetadataKey, target, propertyKey);
// }
export const ExceptionHandler = (target?: ConstructorType<any>) => {
    return ReflectUtils.metadata(ExceptionHandlerMetadataKey, target ?? null);
}

export const getExceptionHandler = (target: any, propertyKey: string): ConstructorType<any> | null => {
    return ReflectUtils.getMetadata(ExceptionHandlerMetadataKey, target, propertyKey);
}

export const getExceptionHandlers = (target: any): MetaDataPropertyAtomic<any, ConstructorType<any> | null>[] => {
    return ObjectUtils.getAllProtoTypeName(target)
        .map(it => new MetaDataPropertyAtomic<any, ConstructorType<any> | null>(target, getExceptionHandler(target, it), it, ReflectUtils.getParameterTypes(target, it)))
        .filter(it => it.metaData !== undefined) || [];
}

export const getTargetAndIncludeNullAndSortExceptionHandlers = (target: any, error: any): MetaDataPropertyAtomic<any, ConstructorType<any> | null>[] => {
    return getExceptionHandlers(target).filter(it => it.metaData == null || ObjectUtils.isPrototypeOfTarget(it.metaData, error))
        .sort((a, b) => ObjectUtils.getAllProtoType(a.metaData).length - ObjectUtils.getAllProtoType(b.metaData).length);
}
// export const getExceptionHandlers = (target: any): MetaDataPropertyAtomic<ConstructorType<any> | null>[] => {
//     return ObjectUtils.getAllProtoTypeName(target)
//         .map(it => new MetaDataPropertyAtomic<ConstructorType<any> | null>(target, getExceptionHandler(target, it), it, ReflectUtils.getParameterTypes(target, it)))
//         .filter(it => it.metaData !== undefined) || [];
// }
