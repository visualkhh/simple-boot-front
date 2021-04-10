import {fromEvent, Observable} from 'rxjs';

export class View<T extends Element> {
    constructor(private _e: T | string) {

    }

    event<T>(eventName: string): Observable<T> {
        return fromEvent<T>(this.e, eventName)
    }

    click<E>(e: T = this.e): Observable<E> {
        return fromEvent<E>(e, 'click');
    }

    get e() {
        if (typeof this._e === 'string') {
            return document.querySelector<T>(this._e)!;
        } else {
            return this._e;
        }
    }

    get value() {
        return (this.e as any).value
    }
}
