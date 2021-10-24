import { Sim } from 'simple-boot-core/decorators/SimDecorator';
import { Component } from 'simple-boot-front/decorators/Component';
import template from './core-routerconfig-section.html'
@Sim()
@Component({
    selector: 'core-routerconfig-section',
    template
})
export class CoreRouterconfigSection {
    title = 'routerConfig'
}
