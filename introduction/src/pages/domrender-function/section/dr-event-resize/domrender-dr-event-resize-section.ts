import { Sim } from 'simple-boot-core/decorators/SimDecorator';
import { Component } from 'simple-boot-front/decorators/Component';
import template from './domrender-dr-event-resize-section.html'


@Sim()
@Component({
    selector: 'domrender-dr-event-resize-section',
    template
})
export class DomrenderDrEventResizeSection {
    target?: Element;
    event?: Event;
}
