import { Sim } from 'simple-boot-core/decorators/SimDecorator';
import { Component } from 'simple-boot-front/decorators/Component';
import template from './router-template-secthion.html'
@Sim()
@Component({
    selector: 'router-template-secthion',
    template
})
export class RouterTemplateSecthion {
    title = 'Router'
}
