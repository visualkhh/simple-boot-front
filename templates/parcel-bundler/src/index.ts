import {AppRouter} from './app/AppRouter';
import {UrlType} from 'simple-boot-front/option/SimOption';
import {Advice} from './app/advice/Advice';
import {SimFrontOption} from 'simple-boot-front/option/SimFrontOption';
import {SimpleBootFront} from 'simple-boot-front/SimpleBootFront';

const option = new SimFrontOption(AppRouter, [Advice]).setUrlType(UrlType.path);
const simpleApplication = new SimpleBootFront(option);
simpleApplication.run();