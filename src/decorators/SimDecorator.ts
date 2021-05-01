import {ConstructorType, GenericClassDecorator} from '../types/Types'
import {SimpleApplication} from '../SimpleApplication';
import 'reflect-metadata';
import {SimGlobal} from '../global/SimGlobal';

export interface SimConfig {
    scheme: string,
}

export const Sim = (config?: SimConfig): GenericClassDecorator<ConstructorType<any>> => {
    return (target: ConstructorType<any>) => {
        SimGlobal.storage.set(target, config)
        // console.log('simdecorator->', target)
        // SimGlobal.application?.simstanceManager?.register(target, config)
    }
}

const postConstructMetadataKey = Symbol('PostConstruct');
// export const PostConstruct = (data: any = {}) => {
export const PostConstruct = (data = {}) => {
    // var t = Reflect.getMetadata('design:type', target, key);
    // console.log(`--------> ${key} type: ${t.name}`);
    //
    // var types = Reflect.getMetadata('design:paramtypes', target, key) || [];
    // var s = types.map((a: { name: any; }) => a.name).join();
    // console.log(`${key} param types: ${s}`);
    // Reflect.defineMetadata('wow', s, target.constructor)
    // console.log('PostConstruct ', target, propertyKey, descriptor)
    return Reflect.metadata(postConstructMetadataKey, data);
    // const orNewSim = SimpleApplication.simstanceManager.getOrNewSim(con);
    // Object.defineProperty(target, propertyKey, {value: 11});
    // const targetElement = target[propertyKey];
    // console.log('----->', targetElement)
    // return Reflect.metadata(formatMetadataKey, con);
}
export const getPostConstruct = (target: any, propertyKey: string): any => {
    return Reflect.getMetadata(postConstructMetadataKey, target, propertyKey);
    // return Reflect.getMetadata('wow', target, propertyKey);
}
// export const getPostConstruct = (target: any, propertyKey: string): Object => {
//     // return Reflect.getMetadata(postConstructMetadataKey, target, propertyKey);
// }
// const formatMetadataKey = Symbol('Injection');
// export const Injection = (con: ConstructorType<any>) => {
//     Injector
//     return Reflect.metadata(formatMetadataKey, con);
// }
// export const Injection = (con: ConstructorType<any>) => (target: any, propertyKey: string) => {
//     // console.log('Injec ', con, target, propertyKey)
//     // const orNewSim = SimpleApplication.simstanceManager.getOrNewSim(con);
//     Object.defineProperty(target, propertyKey, {value: 11});
//     // const targetElement = target[propertyKey];
//     // console.log('----->', targetElement)
//     // return Reflect.metadata(formatMetadataKey, con);
// }
// export const getInjection = (target: any, propertyKey: string): ConstructorType<any> => {
//     return Reflect.getMetadata(formatMetadataKey, target, propertyKey);
// }

// export const Injection = (): GenericClassDecorator<ConstructorType<any>> => {
//     return (target: ConstructorType<any>) => {
//         // console.log('simdecorator->', SimpleApplication, target)
//         SimpleApplication.simstanceManager.register(target, config)
//     }
// }
