import { Sim } from 'simple-boot-core/decorators/SimDecorator';
import { Component } from 'simple-boot-front/decorators/Component';
import template from './domrender-dr-event-focus-section.html'


@Sim()
@Component({
    selector: 'domrender-dr-event-focus-section',
    template
})
export class DomrenderDrEventFocusSection {
    target?: Element;
    event?: Event;
}
