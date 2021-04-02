export type Attr = {name: string, value: any}
export class DomUtils {
    static removeAttribute(result: HTMLElement, attrs: string[]) {
        attrs.forEach(it => {
            result.removeAttribute(it)
        });
    }

    static setAttribute(result: HTMLElement, attrs: string[]) {
        attrs.forEach(it => {
            result.setAttribute(it, '')
        });
    }

    static setAttributeAttr(result: HTMLElement, attrs: Attr[]) {
        attrs.forEach(it => {
            result.setAttribute(it.name, it.value)
        });
    }
}
