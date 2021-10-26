import { Sim } from 'simple-boot-core/decorators/SimDecorator';
import { Component } from 'simple-boot-front/decorators/Component';
import template from './domrender-dr-event-section.html'


@Sim()
@Component({
    selector: 'domrender-dr-event-section',
    template
})
export class DomrenderDrEventSection {
    targetElement?: Element;
    params?: any;
    event?: Event;
    target?: Element;

    dispatchEvent() {
        this.targetElement!.dispatchEvent(new Event('custom'));
    }
}
