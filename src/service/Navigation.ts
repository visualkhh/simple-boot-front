import {Sim} from 'simple-boot-core/decorators/SimDecorator'
import {SimFrontOption, UrlType} from '../option/SimFrontOption';
import {LocationUtils} from '../utils/window/LocationUtils';

@Sim()
export class Navigation {
    constructor(private option: SimFrontOption) {
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

    get pathInfo() {
        return {path: this.path, queryParams: this.queryParams};
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
