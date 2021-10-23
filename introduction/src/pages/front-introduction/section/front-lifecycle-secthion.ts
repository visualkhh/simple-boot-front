import { Sim } from 'simple-boot-core/decorators/SimDecorator';
import { Component } from 'simple-boot-front/decorators/Component';
import template from './front-lifecycle-secthion.html'
@Sim()
@Component({
    selector: 'front-lifecycle-template-secthion',
    template
})
export class FrontLifecycleSecthion {
    title = 'front life cycle'
}
