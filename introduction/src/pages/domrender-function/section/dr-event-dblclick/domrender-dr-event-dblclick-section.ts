import { Sim } from 'simple-boot-core/decorators/SimDecorator';
import { Component } from 'simple-boot-front/decorators/Component';
import template from './domrender-dr-event-dblclick-section.html'


@Sim()
@Component({
    selector: 'domrender-dr-event-dblclick-section',
    template
})
export class DomrenderDrEventDblclickSection {
    count = 1;
}
