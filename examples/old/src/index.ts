import {SimpleBootFront} from 'simple-boot-front/SimpleBootFront';
import {AppRouter} from 'app/AppRouter';
import {SimFrontOption, UrlType} from 'simple-boot-front/option/SimFrontOption';
import {AdviceTemp} from 'simple-boot-front/app/advice/AdviceTemp';
const option = new SimFrontOption(window, [AdviceTemp]).setUrlType(UrlType.hash);
export const factory = () => new SimpleBootFront(AppRouter, option);
factory().run()
