import { Sim } from 'simple-boot-core/decorators/SimDecorator';
import { Component } from 'simple-boot-front/decorators/Component';
import template from './domrender-dr-event-keypress-section.html'


@Sim()
@Component({
    selector: 'domrender-dr-event-keypress-section',
    template
})
export class DomrenderDrEventKeypressSection {
    value = '';
    target?: Element;
    event?: Event;
}
