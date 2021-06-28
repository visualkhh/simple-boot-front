import {Sim} from "simple-boot-front/decorators/SimDecorator";
import {Module} from "simple-boot-front/module/Module";
import {ConstructorType} from "simple-boot-front/types/Types";
import {Url} from "simple-boot-front/model/Url";
import {RouterModule} from "simple-boot-front/router/RouterModule";
import {Router} from "simple-boot-front/router/Router";
import {Introduction} from "./introduction/introduction";
import {Event} from "./event/event";
import {Document} from "./layout/document";
import {Forbidden} from "../errors/forbidden/forbidden";
import {Notfound} from "./errors/notfound/notfound";

@Sim({scheme: 'document-router'})
export class DocumentRouter extends Router {
    '' = Introduction;
    '/' = Introduction;
    '/event' = Event;

    constructor() {
        super('/documents', Document);
    }

    async canActivate(url: Url, module: RouterModule): Promise<RouterModule | ConstructorType<Module>> {
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
