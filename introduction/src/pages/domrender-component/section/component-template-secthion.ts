import { Sim } from 'simple-boot-core/decorators/SimDecorator';
import { Component } from 'simple-boot-front/decorators/Component';
import template from './component-template-secthion.html'
@Sim()
@Component({
    selector: 'dom-render-component-template-secthion',
    template
})
export class ComponentTemplateSecthion {
    title = 'Component'
}
