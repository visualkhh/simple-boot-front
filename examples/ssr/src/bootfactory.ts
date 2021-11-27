import { SimpleBootFront } from 'simple-boot-front/SimpleBootFront';
import { SimFrontOption, UrlType } from 'simple-boot-front/option/SimFrontOption';
import { IndexRouter } from './routers/index.router';

export const factory = (window: Window, using: any[] = []) => {
    return new SimpleBootFront(IndexRouter, new SimFrontOption(window).setUrlType(UrlType.path));
}
