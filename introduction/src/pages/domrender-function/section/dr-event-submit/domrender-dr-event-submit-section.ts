import { Sim } from 'simple-boot-core/decorators/SimDecorator';
import { Component } from 'simple-boot-front/decorators/Component';
import template from './domrender-dr-event-submit-section.html'


@Sim()
@Component({
    selector: 'domrender-dr-event-submit-section',
    template
})
export class DomrenderDrEventSubmitSection {
    target?: Element;
    event?: Event;
    lastSubmit = new Date();
    submit(target: Element, event: Event) {
        this.target = target;
        this.event = event;
        this.lastSubmit = new Date();
        event.preventDefault();
    }
}
