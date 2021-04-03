import {SimpleApplication} from 'simple-boot-front/SimpleApplication';
import {Sim} from 'simple-boot-front/decorators/SimDecorator';
import {Router} from 'simple-boot-front/module/Router';
import {App} from './layouts/app'
import {Index} from './index/index'

export class AppRouter extends Router {
    module = App;
    '' = Index;
}
Sim()(AppRouter)
new SimpleApplication(AppRouter).run().then(it => {})
