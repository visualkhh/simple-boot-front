import { Sim } from 'simple-boot-core/decorators/SimDecorator';
import { Component } from 'simple-boot-front/decorators/Component';
import template from './core-routeraction-section.html'
@Sim()
@Component({
    selector: 'core-routeraction-section',
    template
})
export class CoreRouteractionSection {
    title = 'routerAction'
}
