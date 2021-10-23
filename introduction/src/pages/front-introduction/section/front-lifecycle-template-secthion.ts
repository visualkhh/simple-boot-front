import { Sim } from 'simple-boot-core/decorators/SimDecorator';
import { Component } from 'simple-boot-front/decorators/Component';
import template from './front-lifecycle-template-secthion.html'
@Sim()
@Component({
    selector: 'front-lifecycle-template-secthion',
    template
})
export class FrontLifecycleTemplateSecthion {
    title = 'front life cycle'
}
