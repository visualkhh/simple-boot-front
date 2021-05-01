import {ConstructorType, GenericClassDecorator} from '../types/Types'
import {SimpleApplication} from '../SimpleApplication';
import 'reflect-metadata';

export interface SimConfig {
    scheme: string,
}

export const Sim = (config?: SimConfig): GenericClassDecorator<ConstructorType<any>> => {
    return (target: ConstructorType<any>) => {
        // console.log('simdecorator->', SimpleApplication, target)
        SimpleApplication.simstanceManager.register(target, config)
    }
}

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
