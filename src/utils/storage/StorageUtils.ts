export class StorageUtils {

    public static setLocalStorageItem(k: string, v: string | any, window: Window) {
        if (typeof v === 'object') {
            v = JSON.stringify(v);
        }
        window.localStorage.setItem(k, v);
    }

    public static getLocalStorageItem(k: string, window: Window) {
        return window.localStorage.getItem(k);
    }

    public static cutLocalStorageItem(k: string, window: Window) {
        const data = StorageUtils.getLocalStorageItem(k, window);
        StorageUtils.removeLocalStorageItem(k, window);
        return data;
    }

    public static removeLocalStorageItem(k: string, window: Window) {
        return window.localStorage.removeItem(k);
    }

    public static getLocalStorageJsonItem<T>(k: string, window: Window): T | undefined {
        const item = window.localStorage.getItem(k);
        if (item) {
            try{
                return JSON.parse(item);
            } catch (e) {
                return undefined;
            }
        } else {
            return undefined;
        }
    }

    public static cutLocalStorageJsonItem<T>(k: string, window: Window): T | undefined {
        const item = StorageUtils.getLocalStorageJsonItem(k, window);
        StorageUtils.removeLocalStorageItem(k, window);
        return item as (T | undefined);
    }

    public static clearLocalStorage(window: Window) {
        window.localStorage.clear();
    }
}
