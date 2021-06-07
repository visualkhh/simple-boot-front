export type Attr = {name: string, value: any}
export class DomUtils {
    static selectorElements(selector: string, element: Element|Document = document): Element[] {
        return Array.prototype.slice.call(element.querySelectorAll(selector));
    }

    static selectorNodes(selector: string, element: Element|Document = document) {
        return element.querySelectorAll(selector);
    }

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
