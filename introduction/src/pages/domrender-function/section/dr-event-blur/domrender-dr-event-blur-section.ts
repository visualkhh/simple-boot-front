import { Sim } from 'simple-boot-core/decorators/SimDecorator';
import { Component } from 'simple-boot-front/decorators/Component';
import template from './domrender-dr-event-blur-section.html'


@Sim()
@Component({
    selector: 'domrender-dr-event-blur-section',
    template
})
export class DomrenderDrEventBlurSection {
    target?: Element;
    event?: Event;
}
