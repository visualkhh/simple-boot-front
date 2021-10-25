import { Sim } from 'simple-boot-core/decorators/SimDecorator';
import { Component } from 'simple-boot-front/decorators/Component';
import template from './domrender-dr-event-input-section.html'


@Sim()
@Component({
    selector: 'domrender-dr-event-input-section',
    template
})
export class DomrenderDrEventInputSection {
    value = '';
    target?: Element;
    event?: Event;
}
