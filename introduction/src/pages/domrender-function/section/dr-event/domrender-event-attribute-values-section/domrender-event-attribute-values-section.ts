import { Sim } from 'simple-boot-core/decorators/SimDecorator';
import { Component } from 'simple-boot-front/decorators/Component';
import template from './domrender-event-attribute-values-section.html'

@Sim()
@Component({
    selector: 'domrender-event-attribute-values-section',
    template
})
export class DomrenderEventAttributeValuesSection {
    count = 1;
}
