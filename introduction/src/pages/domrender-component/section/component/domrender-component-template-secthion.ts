import { Sim } from 'simple-boot-core/decorators/SimDecorator';
import { Component } from 'simple-boot-front/decorators/Component';
import template from './domrender-component-template-secthion.html'
@Sim()
@Component({
    selector: 'domrender-component-template-secthion',
    template
})
export class DomrenderComponentTemplateSecthion {
    title = 'Component'
}
