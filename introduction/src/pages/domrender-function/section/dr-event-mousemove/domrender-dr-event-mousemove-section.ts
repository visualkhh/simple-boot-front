import { Sim } from 'simple-boot-core/decorators/SimDecorator';
import { Component } from 'simple-boot-front/decorators/Component';
import template from './domrender-dr-event-mousemove-section.html'


@Sim()
@Component({
    selector: 'domrender-dr-event-mousemove-section',
    template
})
export class DomrenderDrEventMousemoveSection {
    count = 1;
}
