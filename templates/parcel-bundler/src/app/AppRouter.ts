import {Index} from './features/index';
import {App} from './layouts/App';
import {Sim} from 'simple-boot-core/decorators/SimDecorator';
import {ConstructorType} from 'simple-boot-core/types/Types';
import {Forbidden} from './errors/forbidden/forbidden';
import {Notfound} from './errors/notfound/notfound';
import {FrontModule} from 'simple-boot-front/module/FrontModule';
import { FrontRouter } from 'simple-boot-front/router/FrontRouter';
import { Intent } from 'simple-boot-core/intent/Intent';
import { RouterModule } from 'simple-boot-core/route/RouterModule';

@Sim({scheme: 'layout-router'})
export class AppRouter extends FrontRouter {
    '' = Index;
    '/' = Index;

    constructor() {
        super('', App);
    }

    async canActivate (url: Intent, module: RouterModule) {
        if (url.pathname === 'views' && url.queryParams?.auth === 'false') {
            return Forbidden;
        } else {
            return module.module;
        }
    }

    notFound(url: Intent): ConstructorType<FrontModule> {
        console.log('notfound --> ', url.queryParams)
        return Notfound;
    }
}
