import { Sim } from 'simple-boot-core/decorators/SimDecorator';
import { Component } from 'simple-boot-front/decorators/Component';
import template from './domrender-dr-event-contextmenu-section.html'


@Sim()
@Component({
    selector: 'domrender-dr-event-contextmenu-section',
    template
})
export class DomrenderDrEventContextmenuSection {
    count = 1;
}
