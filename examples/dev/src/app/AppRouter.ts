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

@Sim({scheme: 'layout-router'})
export class AppRouter extends RootRouter {
    '' = Index;
    'ajax' = Ajax;
    'intent' = Intents;
    'view' = Views;
    'exception' = Exception;
    'aop' = Aop;
    'views' = Views;

    constructor() {
        super(App);
    }

    async canActivate(url: Url, module: RouterModule): Promise<RouterModule | ConstructorType<Module>>{
        if (url.path === 'views' && url.params.get('auth') === 'false') {
            return Forbidden;
        } else {
            return module;
        }
    }

    notFound(url: Url): ConstructorType<Module> {
        console.log(url.path)
        return Notfound;
    }
}
