import { Sim } from 'simple-boot-core/decorators/SimDecorator';
import { Component } from 'simple-boot-front/decorators/Component';
import template from './domrender-dr-event-mousedown-section.html'


@Sim()
@Component({
    selector: 'domrender-dr-event-mousedown-section',
    template
})
export class DomrenderDrEventMousedownSection {
    count = 1;
}
