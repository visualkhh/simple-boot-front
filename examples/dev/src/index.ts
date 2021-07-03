import {SimpleBootFront} from 'simple-boot-front/SimpleBootFront';
import {AppRouter} from './app/AppRouter';
import {SimFrontOption, UrlType} from 'simple-boot-front/option/SimFrontOption';
import {Advice} from './app/advice/Advice';
import {SimGlobal} from 'simple-boot-core/global/SimGlobal';

// console.log('->', AppRouter)
// console.log('-->', SimGlobal().name, SimGlobal().storage);
const option = new SimFrontOption(AppRouter, [Advice]).setUrlType(UrlType.path);
const simpleApplication = new SimpleBootFront(option);
simpleApplication.run();
// console.log('--', simpleApplication.simstanceManager.storage)
// console.log('2-->', SimGlobal().name, SimGlobal().storage);
