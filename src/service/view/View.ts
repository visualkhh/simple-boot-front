import {fromEvent, Observable} from 'rxjs';
import {Module} from '../../module/Module';

export class View<T extends Element> {
    constructor(private _e: T | string, public module?: Module) {
    }

    event<T>(eventName: string): Observable<T> {
        return fromEvent<T>(this.e, eventName)
    }

    click<E>(e: T = this.e): Observable<E> {
        return fromEvent<E>(e, 'click');
    }

    get e() {
        if (typeof this._e === 'string') {
            const selector = '#' + this.module?.id;
            if (selector) {
                return document.querySelector<T>(`${selector} ${this._e}`)!;
            } else {
                return document.querySelector<T>(this._e)!;
            }
        } else {
            return this._e;
        }
    }

    get value() {
        return (this.e as any).value
    }
}
