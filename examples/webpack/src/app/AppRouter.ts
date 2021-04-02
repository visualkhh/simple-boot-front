import {Router} from 'simple-boot-front/module/Router'
import {Sim} from 'simple-boot-front/decorators/SimDecorator'
import {Index} from './features/index'
import {App} from './layouts/App'
import {HelloWord} from './features/hello/hello-word'

@Sim()
export class AppRouter extends Router {
    module = App
    '' = Index
    'hello-world' = HelloWord
}
