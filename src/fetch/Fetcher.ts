import {ConstructorType} from 'simple-boot-core/types/Types';

export abstract class Fetcher {
    abstract text(path: string, param?: any, dname?: string): Promise<string | void>;
    abstract json<T = any>(url: string, param?: any): Promise<T | void>;
}
