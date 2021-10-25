import { Sim } from 'simple-boot-core/decorators/SimDecorator';
import { Component } from 'simple-boot-front/decorators/Component';
import template from './domrender-dr-event-mouseenter-section.html'


@Sim()
@Component({
    selector: 'domrender-dr-event-mouseenter-section',
    template
})
export class DomrenderDrEventMouseenterSection {
    count = 1;
}
