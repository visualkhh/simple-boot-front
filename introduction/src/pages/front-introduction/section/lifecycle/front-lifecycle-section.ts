import { Sim } from 'simple-boot-core/decorators/SimDecorator';
import { Component } from 'simple-boot-front/decorators/Component';
import template from './front-lifecycle-section.html'
@Sim()
@Component({
    selector: 'front-lifecycle-section',
    template
})
export class FrontLifecycleSection {
    title = 'front life cycle'
}
