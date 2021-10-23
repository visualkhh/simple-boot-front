import { Sim } from 'simple-boot-core/decorators/SimDecorator';
import { Component } from 'simple-boot-front/decorators/Component';
import template from './core-lifecycle-template-secthion.html'
@Sim()
@Component({
    selector: 'core-lifecycle-template-secthion',
    template
})
export class CoreLifecycleTemplateSecthion {
    title = 'core life cycle'
}
