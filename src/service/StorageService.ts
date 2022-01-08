import { Sim } from 'simple-boot-core/decorators/SimDecorator';
import { SimFrontOption } from '../option/SimFrontOption';
import { StorageUtils } from '../utils/storage/StorageUtils';

@Sim()
export class StorageService {
    constructor(public option: SimFrontOption) {
    }

    public setLocalStorageItem(k: string, v: string | any, window: Window = this.option.window) {
        if (typeof v === 'object') {
            v = JSON.stringify(v);
        }
        window.localStorage.setItem(k, v);
    }

    public getLocalStorageItem(k: string, window: Window = this.option.window) {
        return window.localStorage.getItem(k);
    }

    public cutLocalStorageItem(k: string, window: Window = this.option.window) {
        const data = StorageUtils.getLocalStorageItem(k, window);
        StorageUtils.removeLocalStorageItem(k, window);
        return data;
    }

    public removeLocalStorageItem(k: string, window: Window = this.option.window) {
        return window.localStorage.removeItem(k);
    }

    public getLocalStorageJsonItem<T>(k: string, window: Window = this.option.window): T | undefined {
        const item = window.localStorage.getItem(k);
        if (item) {
            return JSON.parse(item);
        } else {
            return undefined;
        }
    }

    public cutLocalStorageJsonItem<T>(k: string, window: Window = this.option.window): T | undefined {
        const item = StorageUtils.getLocalStorageJsonItem(k, window);
        StorageUtils.removeLocalStorageItem(k, window);
        return item as (T | undefined);
    }

    public clearLocalStorage(window: Window = this.option.window) {
        window.localStorage.clear();
    }
}
