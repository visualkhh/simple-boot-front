import {SimpleApplication} from 'simple-boot-front/SimpleApplication';
import {Sim} from 'simple-boot-front/decorators/SimDecorator';
import {App} from './layouts/app'
import {Index} from './index/index'
import {SimOption, UrlType} from 'simple-boot-front/option/SimOption';
import {Router} from 'simple-boot-front/router/Router';

export class AppRouter extends Router {
    module = App;
    '' = Index;
}
Sim()(AppRouter)

const option = new SimOption(AppRouter).setUrlType(UrlType.path);
const simpleApplication = new SimpleApplication(option);
simpleApplication.run();
