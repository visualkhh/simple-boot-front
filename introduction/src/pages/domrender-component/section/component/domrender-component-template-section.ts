import { Sim } from 'simple-boot-core/decorators/SimDecorator';
import { Component } from 'simple-boot-front/decorators/Component';
import template from './domrender-component-template-section.html'
@Sim()
@Component({
    selector: 'domrender-component-template-section',
    template
})
export class DomrenderComponentTemplateSection {
    title = 'Component'
}
