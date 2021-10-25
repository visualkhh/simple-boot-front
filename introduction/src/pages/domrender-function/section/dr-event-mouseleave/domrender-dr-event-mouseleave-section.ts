import { Sim } from 'simple-boot-core/decorators/SimDecorator';
import { Component } from 'simple-boot-front/decorators/Component';
import template from './domrender-dr-event-mouseleave-section.html'


@Sim()
@Component({
    selector: 'domrender-dr-event-mouseleave-section',
    template
})
export class DomrenderDrEventMouseleaveSection {
    count = 1;
}
