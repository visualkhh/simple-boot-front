import { Sim } from 'simple-boot-core/decorators/SimDecorator';
import { Component } from 'simple-boot-front/decorators/Component';
import template from './domrender-dr-inner-html-section.html'

@Sim()
@Component({
    selector: 'domrender-dr-inner-html-section',
    template
})
export class DomrenderDrInnerHtmlSection {
    label = 'click me';
}
