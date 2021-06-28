import {Index} from "./features/index";
import {App} from "./layouts/App";
import {Sim} from "simple-boot-front/decorators/SimDecorator";
import {Router} from "simple-boot-front/router/Router";
import {Module} from "simple-boot-front/module/Module";
import {ConstructorType} from "simple-boot-front/types/Types";
import {Url} from "simple-boot-front/model/Url";
import {RouterModule} from "simple-boot-front/router/RouterModule";
import {Forbidden} from "./errors/forbidden/forbidden";
import {Notfound} from "./errors/notfound/notfound";

@Sim({scheme: 'layout-router'})
export class AppRouter extends Router {
    '' = Index;
    '/' = Index;

    constructor() {
        super('', App);
    }

    async canActivate(url: Url, module: RouterModule): Promise<RouterModule | ConstructorType<Module>> {
        if (url.path === 'views' && url.params.get('auth') === 'false') {
            return Forbidden;
        } else {
            return module;
        }
    }

    notFound(url: Url): ConstructorType<Module> {
        console.log('notfound --> ', url.path)
        return Notfound;
    }
}
