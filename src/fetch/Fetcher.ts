import {ConstructorType} from 'simple-boot-core/types/Types';

export abstract class Fetcher {
    abstract text(path: string, param?: any): Promise<string | void>;
    abstract actionText<T = any>(request?: any): Promise<T | void>;
    abstract actionJson<T = any>(request?: any): Promise<T | void>;
}
