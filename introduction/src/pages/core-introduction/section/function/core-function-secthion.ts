import { Sim } from 'simple-boot-core/decorators/SimDecorator';
import { Component } from 'simple-boot-front/decorators/Component';
import template from './core-function-secthion.html'
@Sim()
@Component({
    selector: 'core-function-section',
    template
})
export class CoreFunctionSecthion {
    title = 'Core engine'
}
