import {Sim} from '../decorators/SimDecorator'
import {SimOption, UrlType} from '../option/SimOption';
import {LocationUtils} from '../util/window/LocationUtils';
import {Url} from "../model/Url";

@Sim()
export class Navigation {
    constructor(private option: SimOption) {
    }

    get path(): string {
        if (UrlType.path === this.option.urlType) {
            return LocationUtils.path();
        } else if (UrlType.hash === this.option.urlType) {
            return LocationUtils.hashPath();
        } else {
            return '';
        }
    }

    get queryParams(): Map<string, string> {
        if (UrlType.path === this.option.urlType) {
            return LocationUtils.pathQueryParams();
        } else if (UrlType.hash === this.option.urlType) {
            return LocationUtils.hashQueryParams();
        } else {
            return new Map<string, string>();
        }
    }

    get pathInfo(): Url {
        return {path: this.path, params: this.queryParams} as Url;
    }

    go(path: string, data = {}, title = '') {
        if (UrlType.path === this.option.urlType) {
            history.pushState(data, title, '/' + path)
        } else if (UrlType.hash === this.option.urlType) {
            history.pushState(data, title, '/#' + path)
        }
        window.dispatchEvent(new Event('popstate'));
        // window.dispatchEvent(new Event('pushstate'));
        // window.dispatchEvent(new Event('locationchange'));
    }
}
