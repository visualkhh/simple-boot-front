import { Sim } from 'simple-boot-core/decorators/SimDecorator';
import { Component } from 'simple-boot-front/decorators/Component';
import template from './domrender-lifecycle-section.html'
@Sim()
@Component({
    selector: 'domrender-lifecycle-section',
    template
})
export class DomrenderLifecycleSection {
    title = 'dom-render life cycle'
}
