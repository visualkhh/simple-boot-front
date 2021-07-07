import {Index} from './features/index';
import {App} from './layouts/App';
import {Ajax} from './features/ajax/ajax';
import {Sim} from 'simple-boot-core/decorators/SimDecorator';
import {Intents} from './features/intent/intents';
import {Views} from './features/view/views';
import {Exception} from './features/exception/exception';
import {Aop} from './features/aop/aop';
import {FrontModule} from 'simple-boot-front/module/FrontModule';
import {ConstructorType} from 'simple-boot-core/types/Types';
import {Notfound} from './features/errors/notfound/notfound';
import {Forbidden} from './features/errors/forbidden/forbidden';
import {DocumentRouter} from './features/documents/DocumentRouter';
import {FrontRouter} from 'simple-boot-front/router/FrontRouter';
import {Intent} from 'simple-boot-core/intent/Intent';
import {RouterModule} from 'simple-boot-core/route/RouterModule';

@Sim({scheme: 'layout-router'})
export class AppRouter extends FrontRouter {
    '' = Index;
    '/' = Index;
    '/ajax' = Ajax;
    '/intent' = Intents;
    '/view' = Views;
    '/exception' = Exception;
    '/aop' = Aop;
    '/views' = Views;

    constructor() {
        super('', App, [DocumentRouter]);
    }

    async canActivate(url: Intent, module: RouterModule) {
        if (url.pathname === 'views' && url.queryParams?.auth === 'false') {
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
