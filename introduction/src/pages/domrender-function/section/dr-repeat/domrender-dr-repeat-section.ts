import { Sim } from 'simple-boot-core/decorators/SimDecorator';
import { Component } from 'simple-boot-front/decorators/Component';
import template from './domrender-dr-repeat-section.html'

@Sim()
@Component({
    selector: 'domrender-dr-repeat-section',
    template
})
export class DomrenderDrRepeatSection {
    public start = 10;
    public end = 20;
    public step = 2;
}
