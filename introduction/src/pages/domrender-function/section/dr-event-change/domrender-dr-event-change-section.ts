import { Sim } from 'simple-boot-core/decorators/SimDecorator';
import { Component } from 'simple-boot-front/decorators/Component';
import template from './domrender-dr-event-change-section.html'


@Sim()
@Component({
    selector: 'domrender-dr-event-change-section',
    template
})
export class DomrenderDrEventChangeSection {
    value = '';
    target?: Element;
    event?: Event;
}
