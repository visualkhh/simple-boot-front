import {Index} from "./features/index";
import {App} from "./layouts/App";
import {Sim} from "simple-boot-front/decorators/SimDecorator";

import {RootRouter} from "simple-boot-front/router/RootRouter";
import {Module} from "simple-boot-front/module/Module";
import {ConstructorType} from "simple-boot-front/types/Types";
import {Url} from "simple-boot-front/model/Url";
import {Notfound} from "../../../dev/src/app/features/errors/notfound/notfound";
import {Router, RouterModuleOption} from "simple-boot-front/router/Router";

@Sim({scheme: 'layout-router'})
export class AppRouter extends RootRouter {
    '' = {module:Index, stripWrap: true};

    constructor() {
        super('', {module: App, stripWrap: true});
    }

    // async canActivate(url: Url, module: Module): Promise<Module | ConstructorType<Module>> {
    //     if (url.path === 'views' && url.params.get('auth') === 'false') {
    //         return Forbidden;
    //     } else {
    //         return module;
    //     }
    // }
    //
    notFound(url: Url): ConstructorType<Module> {
        console.log('notfound --> ', url.path)
        return Notfound;
    }
}
