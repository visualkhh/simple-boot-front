import { Sim } from 'simple-boot-core/decorators/SimDecorator';
import { Component } from 'simple-boot-front/decorators/Component';
import template from './core-function-section.html'
@Sim()
@Component({
    selector: 'core-function-section',
    template
})
export class CoreFunctionSection {
    title = 'core engine'
}
