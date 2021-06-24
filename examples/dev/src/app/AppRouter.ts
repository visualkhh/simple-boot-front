import {Index} from "./features/index";
import {App} from "./layouts/App";
import {Ajax} from "./features/ajax/ajax";
import {Sim} from "simple-boot-front/decorators/SimDecorator";
import {Intents} from './features/intent/intents';
import {Views} from "./features/view/views";
import {Exception} from "./features/exception/exception";
import {Aop} from "./features/aop/aop";
import {RootRouter} from "simple-boot-front/router/RootRouter";
import {Module} from "simple-boot-front/module/Module";
import {ConstructorType} from "simple-boot-front/types/Types";
import {Notfound} from "./features/errors/notfound/notfound";
import {Forbidden} from "./features/errors/forbidden/forbidden";
import {Url} from "simple-boot-front/model/Url";
import {RouterModule} from "simple-boot-front/router/RouterModule";
import {RouterModuleOption} from "simple-boot-front/router/Router";

@Sim({scheme: 'layout-router'})
export class AppRouter extends RootRouter {
    '' = {module: Index, stripWrap: true};
    'ajax' = {module: Ajax, stripWrap: true};
    'intent' = {module: Intents, stripWrap: true};
    'view' = {module: Views, stripWrap: true};
    'exception' = {module: Exception, stripWrap: true};
    'aop' = {module: Aop, stripWrap: true};
    'views' = {module: Views, stripWrap: true};


    constructor() {
        super('', {module: App, stripWrap: true});
    }

    async canActivate(url: Url, module: RouterModule): Promise<RouterModule | RouterModuleOption> {
        if (url.path === 'views' && url.params.get('auth') === 'false') {
            return {module: Forbidden, stripWrap: true};
        } else {
            return module;
        }
    }

    notFound(url: Url): ConstructorType<Module> {
        console.log(url.path)
        return Notfound;
    }
}
