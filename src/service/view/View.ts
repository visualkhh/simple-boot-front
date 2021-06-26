import {fromEvent, Observable} from 'rxjs';
import {Module} from '../../module/Module';
import {FromEventTarget} from "rxjs/src/internal/observable/fromEvent";

export class View<T extends Element> {
    constructor(private _e: T | FromEventTarget<any> | string, public module?: Module) {
    }

    event<T>(eventName: string): Observable<T> {
        return fromEvent<T>(this.e, eventName)
    }

    click<E>(): Observable<E> {
        return fromEvent<E>(this.e, 'click');
    }

    get e() {
        if (typeof this._e === 'string'  && this.module) {
            const selector = `[module-id='${this.module.id}']`;
            return (document.querySelector<T>(`*${selector} ${this._e}`) ?? document.querySelector<T>(`${this._e}${selector}`)) !;
        } else if(typeof this._e === 'string') {
            return document.querySelector<T>(this._e)!;
        } else {
            return this._e;
        }
    }

    get value() {
        return (this.e as any).value
    }
}
