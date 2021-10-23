import { Sim } from 'simple-boot-core/decorators/SimDecorator';
import { Component } from 'simple-boot-front/decorators/Component';
import template from './core-lifecycle-section.html'
@Sim()
@Component({
    selector: 'core-lifecycle-section',
    template
})
export class CoreLifecycleSection {
    title = 'Core life cycle'
}
