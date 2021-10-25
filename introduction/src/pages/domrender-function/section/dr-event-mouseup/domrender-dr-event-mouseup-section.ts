import { Sim } from 'simple-boot-core/decorators/SimDecorator';
import { Component } from 'simple-boot-front/decorators/Component';
import template from './domrender-dr-event-mouseup-section.html'


@Sim()
@Component({
    selector: 'domrender-dr-event-mouseup-section',
    template
})
export class DomrenderDrEventMouseupSection {
    count = 1;
}
