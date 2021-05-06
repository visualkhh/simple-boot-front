import {ConstructorType} from '../../types/Types';
import {ReflectUtils} from '../../util/reflect/ReflectUtils';

const AfterMetadataKey = Symbol('After');
const BeforeMetadataKey = Symbol('Before');
export const After = (data: { type: ConstructorType<any>, target: string }) => {
    return ReflectUtils.metadata(AfterMetadataKey, data);
}
export const getAfter = (target: any, propertyKey: string | undefined = undefined): any => {
    return ReflectUtils.getMetadata(target, propertyKey);
}

export const Before = (data: { type: ConstructorType<any>, target: string }) => {
    return ReflectUtils.metadata(BeforeMetadataKey, data);
}
export const getBefore = (target: any, propertyKey: string): any => {
    return ReflectUtils.getMetadata(BeforeMetadataKey, target, propertyKey);
}
