import { Sim } from 'simple-boot-core/decorators/SimDecorator';
import { Component } from 'simple-boot-front/decorators/Component';
import template from './core-routermapping-section.html'
@Sim()
@Component({
    selector: 'core-routermapping-section',
    template
})
export class CoreRoutermappingSection {
    title = 'router Mapping'
}
