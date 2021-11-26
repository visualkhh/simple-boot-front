import {SimpleBootFront} from 'simple-boot-front/SimpleBootFront';
import {AppRouter} from './app/AppRouter';
import {SimFrontOption, UrlType} from 'simple-boot-front/option/SimFrontOption';
import {Advice} from './app/advice/Advice';
const option = new SimFrontOption(window, [Advice]).setUrlType(UrlType.hash);
export const factory = () => new SimpleBootFront(AppRouter, option);
factory().run()