import {SimpleApplication} from '../SimpleApplication';
import {ConstructorType} from '../types/Types';
import {SimConfig} from '../decorators/SimDecorator';
//
export const SimGlobal = new class {
    _application?: SimpleApplication;
    storage = new Map<ConstructorType<any>, SimConfig|undefined>();
    // storage = new Map<ConstructorType<any>, { config?: SimConfig, object?: any }>();

    set application(application: SimpleApplication | undefined) {
        this._application = application;
        (window as any).application = this._application;
    }

    get application(): SimpleApplication | undefined {
        return this._application;
    }
}()
