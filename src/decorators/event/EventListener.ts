import {ReflectUtils} from "../../util/reflect/ReflectUtils";
import {ConstructorType} from "../../types/Types";
import {View} from "../../service/view/View";
import {FromEventTarget} from "rxjs/internal/observable/fromEvent";

export interface EventListenerOption {
    target: string|Element|FromEventTarget<any>;
    name: string;
}
const EventListenerMetadataKey = Symbol('EventListener');
// export const EventListener = (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
//     ReflectUtils.defineMetadata(EventListenerMetadataKey, EventListenerMetadataKey, target, propertyKey);
// }
// export const getEventListener = (target: any, propertyKey: string): any => {
//     return ReflectUtils.getMetadata(EventListenerMetadataKey, target, propertyKey);
// }

export const EventListener = (option: EventListenerOption) => {
    return ReflectUtils.metadata(EventListenerMetadataKey, option);
}

export const getEventListener = (target: any, propertyKey: string): EventListenerOption => {
    return ReflectUtils.getMetadata(EventListenerMetadataKey, target, propertyKey);
}
