import {Sim} from '../decorators/SimDecorator'
import {SimOption, UrlType} from '../option/SimOption';
import {LocationUtils} from '../util/window/LocationUtils';

@Sim()
export class Navigation {
    constructor(private option: SimOption) {
    }

    get url(): string {
        if (UrlType.path === this.option.urlType) {
            return LocationUtils.path();
        } else if (UrlType.hash === this.option.urlType) {
            return LocationUtils.hash();
        } else {
            return '';
        }
    }

    go(path: string) {
        if (UrlType.path === this.option.urlType) {
            history.pushState({}, '', '/' + path)
        } else if (UrlType.hash === this.option.urlType) {
            history.pushState({}, '', '/#' + path)
        }
        window.dispatchEvent(new Event('popstate'));
        // window.dispatchEvent(new Event('pushstate'));
        // window.dispatchEvent(new Event('locationchange'));
    }
}
