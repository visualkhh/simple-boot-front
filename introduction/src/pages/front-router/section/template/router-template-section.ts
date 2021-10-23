import { Sim } from 'simple-boot-core/decorators/SimDecorator';
import { Component } from 'simple-boot-front/decorators/Component';
import template from './router-template-section.html'
@Sim()
@Component({
    selector: 'router-template-section',
    template
})
export class RouterTemplateSection {
    title = 'Router'
}
