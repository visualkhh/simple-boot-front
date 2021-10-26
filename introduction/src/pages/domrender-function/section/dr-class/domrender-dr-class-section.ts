import { Sim } from 'simple-boot-core/decorators/SimDecorator';
import { Component } from 'simple-boot-front/decorators/Component';
import template from './domrender-dr-class-section.html'


@Sim()
@Component({
    selector: 'domrender-dr-class-section',
    template
})
export class DomrenderDrClassSection {
    color = false;
    bgColor = false;

    change() {
        this.color = (Math.random() * 10) > 5;
        this.bgColor = (Math.random() * 10) > 5;
    }

}
