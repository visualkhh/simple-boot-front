import { Sim } from 'simple-boot-core/decorators/SimDecorator';
import { Component } from 'simple-boot-front/decorators/Component';
import template from './core-lifecycle-secthion.html'
@Sim()
@Component({
    selector: 'core-lifecycle-secthion',
    template
})
export class CoreLifecycleSecthion {
    title = 'core life cycle'
}
