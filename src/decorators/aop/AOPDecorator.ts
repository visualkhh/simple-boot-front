import {ReflectUtils} from '../../util/reflect/ReflectUtils';
import {MetaDataPropertyAtomic} from '../MetaDataAtomic';
import {ObjectUtils} from '../../util/object/ObjectUtils';
import {ConstructorType} from "../../types/Types";

const AfterMetadataKey = Symbol('After');
const BeforeMetadataKey = Symbol('Before');
// export enum AOPAction {
//     // get = 'get',
//     // set = 'set',
//     // call = 'call',
// }
type AOPOption = {type?: ConstructorType<any>, property: string}

// after
export const After = (data: AOPOption) => {
    // console.log('---after')
    return ReflectUtils.metadata(AfterMetadataKey, data);
}
export const getAfter = (target: any, propertyKey: string): AOPOption => {
    return ReflectUtils.getMetadata(AfterMetadataKey, target, propertyKey);
}

export const getAfters = (target: any): MetaDataPropertyAtomic<any, AOPOption>[] => {
    return ObjectUtils.getAllProtoTypeName(target)
        .map(it => new MetaDataPropertyAtomic<any, AOPOption>(target, getAfter(target, it), it))
        .filter(it => it.metaData !== undefined) || [];
}

export const getProtoAfters = (target: any, propertyKey: string, type?: ConstructorType<any>): MetaDataPropertyAtomic<any, AOPOption>[] => {
    return getAfters(target).filter(it => propertyKey === it.metaData.property && type === it.metaData.type?.prototype) || [];
}

// before
export const Before = (data: AOPOption) => {
    return ReflectUtils.metadata(BeforeMetadataKey, data);
}

export const getBefore = (target: any, propertyKey: string): AOPOption => {
    return ReflectUtils.getMetadata(BeforeMetadataKey, target, propertyKey);
}

export const getBefores = (target: any): MetaDataPropertyAtomic<any, AOPOption>[] => {
    return ObjectUtils.getAllProtoTypeName(target)
        .map(it => new MetaDataPropertyAtomic<any, AOPOption>(target, getBefore(target, it), it))
        .filter(it => it.metaData !== undefined) || [];
}

export const getProtoBefores = (target: any, propertyKey: string, type?: ConstructorType<any>): MetaDataPropertyAtomic<any, AOPOption>[] => {
    return getBefores(target).filter(it => propertyKey === it.metaData.property && type === it.metaData.type?.prototype) || [];
}
