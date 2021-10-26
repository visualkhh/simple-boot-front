import { Sim } from 'simple-boot-core/decorators/SimDecorator';
import { Component } from 'simple-boot-front/decorators/Component';
import template from './domrender-dr-attr-section.html'


@Sim()
@Component({
    selector: 'domrender-dr-attr-section',
    template
})
export class DomrenderDrAttrSection {
    rows = 11;
    cols = 11;

    change() {
        this.rows = Math.floor(Math.random() * 10)
        this.cols = Math.floor(Math.random() * 10)
    }
}
