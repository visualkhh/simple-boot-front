import { Sim } from 'simple-boot-core/decorators/SimDecorator';
import { Component } from 'simple-boot-front/decorators/Component';
import template from './domrender-dr-event-keyup-section.html'


@Sim()
@Component({
    selector: 'domrender-dr-event-keyup-section',
    template
})
export class DomrenderDrEventKeyupSection {
    value = '';
    target?: Element;
    event?: Event;
}
