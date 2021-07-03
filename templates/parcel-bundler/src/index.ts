import {SimpleBootFront} from 'simple-boot-front/SimpleBootFront';
import {Advice} from './app/advice/Advice';
import {AppRouter} from './app/AppRouter';
import {SimFrontOption, UrlType} from 'simple-boot-front/option/SimFrontOption';
const option = new SimFrontOption(AppRouter, [Advice]).setUrlType(UrlType.path);
const simpleApplication = new SimpleBootFront(option);
simpleApplication.run();
