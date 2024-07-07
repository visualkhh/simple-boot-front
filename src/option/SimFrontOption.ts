import { InitOptionType, SimOption } from 'simple-boot-core/SimOption';

export enum UrlType {
  path = 'path',
  hash = 'hash'
}

export class SimFrontOption extends SimOption {
  selector: string = '#app';
  urlType: UrlType = UrlType.path;

  constructor(public window: Window, initSimOption?: InitOptionType) {
    super(initSimOption);
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
