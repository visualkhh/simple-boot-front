import {Sim} from 'simple-boot-core/decorators/SimDecorator'
import {SimFrontOption, UrlType} from '../option/SimFrontOption';
import {LocationUtils} from '../utils/window/LocationUtils';

@Sim()
export class Navigation {
    constructor(private option: SimFrontOption) {
    }

    get url(): string {
        const queryParams = this.queryParamsObject;
        const queryString = Object.entries(queryParams).map(([key, value]) => `${key}=${value}`).join('&');
        const path = this.path;
        return path + (queryString.length > 0 ? ('?'+queryString) : '');
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
            return LocationUtils.pathQueryParamsObject(this.option.window);
        } else {
            return {};
        }
    }

    get pathInfo() {
        return {path: this.path, queryParams: this.queryParams};
    }

    reload() {
        window.dispatchEvent(new Event('popstate'));
    }
    static pathAndSearch(): string {
        return window.location.pathname + window.location.search;
    }

    go(path: string, data: any = {}, title = '') {
        if (UrlType.path === this.option.urlType) {
            history.pushState(data, title, path)
        } else if (UrlType.hash === this.option.urlType) {
            path = '#' + path.substring(1)
            history.pushState(data, title, path)
        }
        window.dispatchEvent(new Event('popstate'));
        // window.dispatchEvent(new Event('pushstate'));
        // window.dispatchEvent(new Event('locationchange'));
    }

    state(): any {
        return history.state;
    }
}
