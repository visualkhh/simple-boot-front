import {Router, Sim} from 'simple-boot-core/decorators/SimDecorator';
import {IndexComponent} from '@src/app/index.component';
import {RouterAction} from 'simple-boot-core/route/RouterAction';
import {Intent} from 'simple-boot-core/intent/Intent';
import {Component} from 'simple-boot-front/decorators/Component';

@Sim()
@Router({
    path: '',
    route: {
        '': '/',
        '/': IndexComponent
    }
})
@Component({
    template: '<div>11<component component="this.child"></component>22</div>'
})
export class IndexRouter implements RouterAction {
    child: any;

    async canActivate(url: Intent, module: any){
        this.child = module;
    }

    hasActivate(checkObj: any): boolean {
        return this.child === checkObj;
    }
}