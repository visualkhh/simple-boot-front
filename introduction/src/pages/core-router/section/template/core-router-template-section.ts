import { Sim } from 'simple-boot-core/decorators/SimDecorator';
import { Component } from 'simple-boot-front/decorators/Component';
import template from './core-router-template-section.html'
@Sim()
@Component({
    selector: 'core-router-template-section',
    template
})
export class CoreRouterTemplateSection {
    title = 'router'
}
