import { Index } from './features/index';
import { Ajax } from './features/ajax/ajax';
import { Router, Sim } from 'simple-boot-core/decorators/SimDecorator';
import { Component } from 'simple-boot-front/decorators/Component';
import { Intents } from './features/intent/intents';
import { Views } from './features/view/views';
import { Exception } from './features/exception/exception';
import { Aop } from './features/aop/aop';
import { DocumentRouter } from './features/documents/DocumentRouter';
import { Intent } from 'simple-boot-core/intent/Intent';
import { RouterAction } from 'simple-boot-core/route/RouterAction';
import template from './layouts/app.html';
import css from './layouts/app.css';
import { SubNotfound } from './features/documents/errors/notfound/subNotfound';
import { SimFrontOption } from 'simple-boot-front/option/SimFrontOption';

// export class Base {
//
// }
// class User extends Base {
//
// }

@Sim({scheme: 'layout-router'})
@Component({template, styles: [css]})
@Router({
    path: '',
    route: {
        '/': Index,
        '/ajax': Ajax,
        '/intent': Intents,
        '/views': Views,
        '/exception': Exception,
        '/aop': Aop
    },
    routers: [DocumentRouter]
})
export class AppRouter implements RouterAction {
    child?: any;
    data = 'my name is visual'
    constructor(private subNotfound: SubNotfound, private option: SimFrontOption) {
    }

    canActivate(url: Intent, module: any): void {
        // console.trace();
        this.data = this.data + '-------'
        console.log('-----!!--AppRouter----->', url, module)
        if (!module) { // 404
            this.child = this.subNotfound;
        } else if (this.child !== module) {
            this.child = module;
            setTimeout(() => {
                this.child.data = 'zzzzzz'
            }, 5000)
        }
    }
}
