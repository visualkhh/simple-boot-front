/**
 * Type for what object is instances of
 */
import {Module} from '../module/Module'

export interface ConstructorType<T> {
    new(...args: any[]): T;
}

/**
 * Generic `ClassDecorator` type
 */
export type GenericClassDecorator<T> = (target: T) => void;

export interface ModuleProperty {
    [name: string]: Module
}
