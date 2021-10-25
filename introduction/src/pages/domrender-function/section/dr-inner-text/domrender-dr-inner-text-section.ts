import { Sim } from 'simple-boot-core/decorators/SimDecorator';
import { Component } from 'simple-boot-front/decorators/Component';
import template from './domrender-dr-inner-text-section.html'

@Sim()
@Component({
    selector: 'domrender-dr-inner-text-section',
    template
})
export class DomrenderDrInnerTextSection {
    label = 'click me';
}
