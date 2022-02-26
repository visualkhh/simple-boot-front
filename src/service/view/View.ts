
export class View<T extends Element> {
    constructor(private _e: T | string) {
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
