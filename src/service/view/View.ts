
export class View<T extends Element> {
    constructor(private _e: T | string, public module?: any) {
    }

    // event<T>(eventName: string): Observable<T> {
    //     this.e.addEventListener(eventName, )
    //     return fromEvent<T>(this.e, eventName)
    // }
    //
    // click<E>(): Observable<E> {
    //     return fromEvent<E>(this.e, 'click');
    // }

    get e() {
        if (typeof this._e === 'string' && this.module) {
            const selector = `[module-id='${this.module.id}']`;
            return (document.querySelector<T>(`*${selector} ${this._e}`) ?? document.querySelector<T>(`${this._e}${selector}`)) !;
        } else if (typeof this._e === 'string') {
            return document.querySelector<T>(this._e)!;
        } else {
            return this._e;
        }
    }

    get value() {
        return (this.e as any).value
    }
}
