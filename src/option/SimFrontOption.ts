import {Router} from '../router/Router';
import {SimOption} from 'simple-boot-core/SimOption';
import {ConstructorType} from 'simple-boot-core/types/Types';
import {SimFrontProxyHandler} from "../proxy/SimFrontProxyHandler";

export enum UrlType {
    // eslint-disable-next-line no-unused-vars
    path = 'path',
    // eslint-disable-next-line no-unused-vars
    hash = 'hash'
}

export class SimFrontOption extends SimOption {
    selector: string = '#app';
    urlType: UrlType = UrlType.path;

    constructor(public rootRouter: ConstructorType<Router>, advice: ConstructorType<any>[]) {
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

    setRootRouter(rootRouter: ConstructorType<Router>): SimFrontOption {
        this.rootRouter = rootRouter;
        return this;
    }
}
