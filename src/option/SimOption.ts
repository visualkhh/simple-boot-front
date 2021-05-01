export enum UrlType {
    // eslint-disable-next-line no-unused-vars
    path = 'path',
    // eslint-disable-next-line no-unused-vars
    hash = 'hash'
}

export class SimOption {
    selector: string = 'app';
    urlType: UrlType = UrlType.path;
}
