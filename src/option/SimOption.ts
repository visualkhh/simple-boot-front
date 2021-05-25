import {ConstructorType} from '../types/Types';
import {Router} from '../router/Router';
import {RootRouter} from '../router/RootRouter';

export enum UrlType {
    // eslint-disable-next-line no-unused-vars
    path = 'path',
    // eslint-disable-next-line no-unused-vars
    hash = 'hash'
}

export class SimOption {
    selector: string = '#app';
    urlType: UrlType = UrlType.path;
    advice: ConstructorType<RootRouter>[] = []

    constructor(public rootRouter: ConstructorType<RootRouter>) {
    }

    setSelector(selector: string): SimOption {
        this.selector = selector;
        return this;
    }

    setUrlType(urlType: UrlType): SimOption {
        this.urlType = urlType;
        return this;
    }

    setRootRouter(rootRouter: ConstructorType<RootRouter>): SimOption {
        this.rootRouter = rootRouter;
        return this;
    }

    setAdvice(...advice: ConstructorType<any>[]): SimOption {
        this.advice = advice;
        return this;
    }
}
