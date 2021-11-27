import { Index } from 'app/features/index';
import { Ajax } from 'app/features/ajax/ajax';
import { Router, Sim } from 'simple-boot-core/decorators/SimDecorator';
import { Component } from 'simple-boot-front/decorators/Component';
import { Intents } from 'app/features/intent/intents';
import { Views } from 'app/features/view/views';
import { Exception } from 'app/features/exception/exception';
import { Aop } from 'app/features/aop/aop';
import { DocumentRouter } from 'app/features/documents/DocumentRouter';
import { Intent } from 'simple-boot-core/intent/Intent';
import { RouterAction } from 'simple-boot-core/route/RouterAction';
import template from 'app/layouts/app.html';
import css from 'app/layouts/app.css';
import { SubNotfound } from 'app/features/documents/errors/notfound/subNotfound';
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
