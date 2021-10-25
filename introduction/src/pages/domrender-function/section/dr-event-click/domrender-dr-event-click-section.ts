import { Sim } from 'simple-boot-core/decorators/SimDecorator';
import { Component } from 'simple-boot-front/decorators/Component';
import template from './domrender-dr-event-click-section.html'


@Sim()
@Component({
    selector: 'domrender-dr-event-click-section',
    template
})
export class DomrenderDrEventClickSection {
    count = 1;
}
