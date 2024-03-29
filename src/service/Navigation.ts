import {Sim} from 'simple-boot-core/decorators/SimDecorator'
import {SimFrontOption, UrlType} from '../option/SimFrontOption';
import {LocationUtils} from 'dom-render/utils/location/LocationUtils';
import {SimpleBootFront} from '../SimpleBootFront';
import {Config} from 'dom-render/configs/Config';

@Sim
export class Navigation {
    // public domRenderConfig?: Config;
    constructor(public option: SimFrontOption) {
    }

    get url(): string {
        const queryParams = this.queryParamsObject;
        // (reqUrlObj1.searchParams.toString() ? '&'+reqUrlObj1.searchParams.toString() : '' )
        // 위를 쓸수도있지만 hash 타입도 있기때문에 아래 처럼 순수하게 처리함.
        const queryString = Object.entries(queryParams).map(([key, value]) => `${key}=${value}`).join('&');
        const path = this.path;
        return path + (queryString.length > 0 ? ('?' + queryString) : '');
    }

    get path(): string {
        if (UrlType.path === this.option.urlType) {
            return LocationUtils.path(this.option.window);
        } else if (UrlType.hash === this.option.urlType) {
            return LocationUtils.hashPath(this.option.window);
        } else {
            return '';
        }
    }

    get queryParams(): Map<string, string> {
        if (UrlType.path === this.option.urlType) {
            return LocationUtils.pathQueryParams(this.option.window);
        } else if (UrlType.hash === this.option.urlType) {
            return LocationUtils.hashQueryParams(this.option.window);
        } else {
            return new Map<string, string>();
        }
    }

    get queryParamsObject(): any {
        if (UrlType.path === this.option.urlType) {
            return LocationUtils.pathQueryParamsObject(this.option.window);
        } else if (UrlType.hash === this.option.urlType) {
            return LocationUtils.hashQueryParamsObject(this.option.window);
        } else {
            return {};
        }
    }

    get pathInfo() {
        return {path: this.path, queryParams: this.queryParams};
    }

    // get router(): any {
    //     // this.option.
    //     return this.domRenderConfig?.router;
    //     // this.option.
    // }

    reload() {
        // if (this.domRenderConfig?.router) {
        //     this.domRenderConfig?.router.reload();
        // } else {
        //     this.option.window.dispatchEvent(new Event('popstate'));
        // }
        this.option.window.dispatchEvent(new Event('popstate'));
    }

    pathAndSearch(): string {
        return this.option.window.location.pathname + this.option.window.location.search;
    }

    goNoPopStateEvent(path: string, data: any = {}, title = '') {
        if (UrlType.path === this.option.urlType) {
            this.option.window.history.pushState(data, title, path)
        } else if (UrlType.hash === this.option.urlType) {
            path = '#' + path
            this.option.window.history.pushState(data, title, path)
        }
    }

    go(path: string, data: any = {}, title = '') {
        // if (this.domRenderConfig?.router) {
        //     this.domRenderConfig?.router.go(path, data, title);
        // } else {
        //     this.goNoPopStateEvent(path, data, title);
        //     this.option.window.dispatchEvent(new Event('popstate'));
        // }
        this.goNoPopStateEvent(path, data, title);
        this.option.window.dispatchEvent(new Event('popstate'));
        // this.goNoPopStateEvent(path, data, title);
        // this.option.window.dispatchEvent(new Event('popstate'));
        // window.dispatchEvent(new Event('pushstate'));
        // window.dispatchEvent(new Event('locationchange'));
    }

    state(): any {
        return this.option.window.history.state;
    }
}
