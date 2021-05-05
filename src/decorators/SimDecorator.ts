import {ConstructorType, GenericClassDecorator} from '../types/Types'
import {SimGlobal} from '../global/SimGlobal';
import {ReflectUtils} from '../util/reflect/ReflectUtils';

const SimMetadataKey = Symbol('Sim');

export interface SimConfig {
    scheme: string,
}

export const Sim = (config?: SimConfig): GenericClassDecorator<ConstructorType<any>> => {
    // Reflect.metadata(SimMetadataKey, config);
    // return (target: ConstructorType<any>) => {
    //     SimGlobal.storage.set(target, config)
    // }
    return (target: ConstructorType<any>) => {
        ReflectUtils.defineMetadata(SimMetadataKey, config, target);
        // Reflect.defineMetadata(SimMetadataKey, config, target.prototype);
        SimGlobal.storage.add(target);
        // return Reflect.metadata(SimMetadataKey, config);
        // Reflect.metadata(SimMetadataKey, config);
    }
}
//
export const getSim = (target: ConstructorType<any> | Function | any): SimConfig | undefined => {
    // console.log('000>>', target, typeof target)
    // const constructor = target.constructor;

    if (typeof target === 'object') {
        target = target.constructor;
    }
    try {
        return ReflectUtils.getMetadata(SimMetadataKey, target);
        // return Reflect.getMetadata(SimMetadataKey, target.prototype);
    } catch (e) {
    }
}

// export const reportableClafssDecorator = (config?: SimConfig) => <T extends { new (...args: any[]): {} }>(constructor: T) => {
//     // config;
//     return class extends constructor {
//         reportingURL = 'http://www...';
//     };
// }

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

// const postConstructMetadataKey = Symbol('PostConstruct');
const PostConstructMetadataKey = Symbol('PostConstruct');
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
    return Reflect.metadata(PostConstructMetadataKey, data);
    // const orNewSim = SimpleApplication.simstanceManager.getOrNewSim(con);
    // Object.defineProperty(target, propertyKey, {value: 11});
    // const targetElement = target[propertyKey];
    // console.log('----->', targetElement)
    // return Reflect.metadata(formatMetadataKey, con);
}
export const getPostConstruct = (target: any, propertyKey: string): any => {
    return ReflectUtils.getMetadata(PostConstructMetadataKey, target, propertyKey);
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
