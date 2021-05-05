import {SimpleApplication} from '../SimpleApplication';
import {ConstructorType} from '../types/Types';
export const SimGlobal = new class {
    _application?: SimpleApplication;
    storage = new Set<ConstructorType<any>>();
    // storage = new Map<ConstructorType<any>, { config?: SimConfig, object?: any }>();

    set application(application: SimpleApplication | undefined) {
        this._application = application;
        (window as any).application = this._application;
    }

    get application(): SimpleApplication | undefined {
        return this._application;
    }
}()
