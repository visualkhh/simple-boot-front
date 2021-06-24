import {Index} from "./features/index";
import {App} from "./layouts/App";
import {Sim} from "simple-boot-front/decorators/SimDecorator";

import {RootRouter} from "simple-boot-front/router/RootRouter";
import {Module} from "simple-boot-front/module/Module";
import {ConstructorType} from "simple-boot-front/types/Types";
import {Url} from "simple-boot-front/model/Url";
import {Notfound} from "../../../dev/src/app/features/errors/notfound/notfound";
import {Forbidden} from "../../../dev/src/app/features/errors/forbidden/forbidden";
import {RouterModule} from "simple-boot-front/router/RouterModule";

@Sim({scheme: 'layout-router'})
export class AppRouter extends RootRouter {
    '' = Index;

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
