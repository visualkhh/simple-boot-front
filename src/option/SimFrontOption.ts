import { SimOption } from 'simple-boot-core/SimOption';
import { ConstructorType } from 'simple-boot-core/types/Types';
export enum UrlType {
    path = 'path',
    hash = 'hash'
}
export class SimFrontOption extends SimOption {
    selector: string = '#app';
    urlType: UrlType = UrlType.path;
    constructor(public window: Window, advice: ConstructorType<any>[] = []) {
        super(advice);
    }

    setSelector(selector: string): SimFrontOption {
        this.selector = selector;
        return this;
    }

    setUrlType(urlType: UrlType): SimFrontOption {
        this.urlType = urlType;
        return this;
    }
}
