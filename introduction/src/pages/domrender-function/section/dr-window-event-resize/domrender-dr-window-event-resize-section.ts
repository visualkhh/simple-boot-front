import { Sim } from 'simple-boot-core/decorators/SimDecorator';
import { Component } from 'simple-boot-front/decorators/Component';
import template from './domrender-dr-window-event-resize-section.html'


@Sim()
@Component({
    selector: 'domrender-dr-window-event-resize-section',
    template
})
export class DomrenderDrWindowEventResizeSection {
    event?: Event;
    target?: Window;
}
