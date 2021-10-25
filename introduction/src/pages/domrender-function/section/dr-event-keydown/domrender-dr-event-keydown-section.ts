import { Sim } from 'simple-boot-core/decorators/SimDecorator';
import { Component } from 'simple-boot-front/decorators/Component';
import template from './domrender-dr-event-keydown-section.html'


@Sim()
@Component({
    selector: 'domrender-dr-event-keydown-section',
    template
})
export class DomrenderDrEventKeydownSection {
    value = '';
    target?: Element;
    event?: Event;
}
