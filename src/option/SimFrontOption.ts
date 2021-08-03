import { SimOption } from 'simple-boot-core/SimOption';
import { ConstructorType } from 'simple-boot-core/types/Types';
import { Config } from 'dom-render/Config';
import { Scope } from 'dom-render/Scope';
import { ScopeObject } from 'dom-render/ScopeObject';

export enum UrlType {
    path = 'path',
    hash = 'hash'
}

export class SimFrontOption extends SimOption {
    selector: string = '#app';
    urlType: UrlType = UrlType.path;
    domRenderConfig = new Config();

    constructor(public window: Window, advice: ConstructorType<any>[] = []) {
        super(advice);
    }

    setFactoryScopeObject(factoryScopeObject: (scope: Scope) => ScopeObject | undefined): SimFrontOption {
        this.domRenderConfig.factoryScopeObject = factoryScopeObject;
        return this;
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
