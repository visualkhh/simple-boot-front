import { SimOption } from 'simple-boot-core/SimOption';
import { ConstructorType } from 'simple-boot-core/types/Types';
import { Config, ConfigParam, ScopeObjectFactory } from 'dom-render/Config';
import { Scope } from 'dom-render/Scope';
import { ScopeObject } from 'dom-render/ScopeObject';

export enum UrlType {
    path = 'path',
    hash = 'hash'
}

export class SimFrontOption extends SimOption {
    selector: string = '#app';
    urlType: UrlType = UrlType.path;
    private _domRenderConfig?: Config;

    constructor(public window: Window, advice: ConstructorType<any>[] = []) {
        super(advice);
    }

    setDomRenderConfig(config: ConfigParam): SimFrontOption {
        this._domRenderConfig = new Config(config);
        return this;
    }

    getDomRenderConfig(): Config | undefined {
        return this._domRenderConfig;
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
