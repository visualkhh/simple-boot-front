import { Sim } from 'simple-boot-core/decorators/SimDecorator';
import { Component } from 'simple-boot-front/decorators/Component';
import template from './domrender-dr-window-event-popstate-section.html'


@Sim()
@Component({
    selector: 'domrender-dr-window-event-popstate-section',
    template
})
export class DomrenderDrWindowEventPopstateSection {
    value = '';
    event?: Event;
}
