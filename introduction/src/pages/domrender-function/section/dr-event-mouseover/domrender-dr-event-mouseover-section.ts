import { Sim } from 'simple-boot-core/decorators/SimDecorator';
import { Component } from 'simple-boot-front/decorators/Component';
import template from './domrender-dr-event-mouseover-section.html'


@Sim()
@Component({
    selector: 'domrender-dr-event-mouseover-section',
    template
})
export class DomrenderDrEventMouseoverSection {
    count = 1;
}
