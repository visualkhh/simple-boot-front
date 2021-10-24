import { Sim } from 'simple-boot-core/decorators/SimDecorator';
import { Component } from 'simple-boot-front/decorators/Component';
import template from './core-routercurrent-section.html'
@Sim()
@Component({
    selector: 'core-routercurrent-section',
    template
})
export class CoreRoutercurrentSection {
    title = 'current Route (RouterModule)'
}
