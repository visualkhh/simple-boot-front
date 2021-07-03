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
import {Url} from 'simple-boot-front/model/Url';
import {RouterModule} from 'simple-boot-front/router/RouterModule';
import {DocumentRouter} from './features/documents/DocumentRouter';
import {Router} from 'simple-boot-front/router/Router';

@Sim({scheme: 'layout-router'})
export class AppRouter extends Router {
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

    async canActivate(url: Url, module: RouterModule) {
        if (url.path === 'views' && url.params.get('auth') === 'false') {
            return Forbidden;
        } else {
            return module;
        }
    }

    notFound(url: Url): ConstructorType<FrontModule> {
        console.log(url.path)
        return Notfound;
    }
}
