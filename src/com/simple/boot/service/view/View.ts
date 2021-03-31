import {fromEvent, Observable} from 'rxjs';

export class View<T extends Element> {
    constructor(public e: T) {
    }

    event<T>(eventName: string): Observable<T> {
        return fromEvent<T>(this.e, eventName)
    }

    click<E>(e: T = this.e): Observable<E> {
        return fromEvent<E>(e, 'click');
    }

    get value() {
        return (this.e as any).value
    }
}
