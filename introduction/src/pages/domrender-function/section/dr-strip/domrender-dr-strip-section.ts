import { Sim } from 'simple-boot-core/decorators/SimDecorator';
import { Component } from 'simple-boot-front/decorators/Component';
import template from './domrender-dr-strip-section.html'


@Sim()
@Component({
    selector: 'domrender-dr-strip-section',
    template
})
export class DomrenderDrStripSection {
}
