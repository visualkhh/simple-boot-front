import {Sim} from 'simple-boot-core/decorators/SimDecorator';
import {FrontModule} from 'simple-boot-front/module/FrontModule';
import {ConstructorType} from 'simple-boot-core/types/Types';
import {Introduction} from './introduction/introduction';
import {Event} from './event/event';
import {Document} from './layout/document';
import {Forbidden} from '../errors/forbidden/forbidden';
import {Notfound} from './errors/notfound/notfound';
import {FrontRouter} from 'simple-boot-front/router/FrontRouter';
import {Intent} from 'simple-boot-core/intent/Intent';
import {RouterModule} from 'simple-boot-core/route/RouterModule';

@Sim({scheme: 'document-router'})
export class DocumentRouter extends FrontRouter {
    '' = Introduction;
    '/' = Introduction;
    '/event' = Event;

    constructor() {
        super('/documents', Document);
    }

    async canActivate(url: Intent, module: RouterModule) {
        if (url.pathname === 'views' && url.queryParams.auth === 'false') {
            return Forbidden;
        } else {
            return module.module;
        }
    }

    notFound(url: Intent): ConstructorType<FrontModule> {
        console.log(url.pathname)
        return Notfound;
    }
}
