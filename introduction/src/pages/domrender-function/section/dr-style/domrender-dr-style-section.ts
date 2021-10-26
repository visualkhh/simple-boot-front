import { Sim } from 'simple-boot-core/decorators/SimDecorator';
import { Component } from 'simple-boot-front/decorators/Component';
import template from './domrender-dr-style-section.html'


@Sim()
@Component({
    selector: 'domrender-dr-style-section',
    template
})
export class DomrenderDrStyleSection {
    size = 10;

    change() {
        this.size = Math.floor(Math.random() * 40);
    }

}
