import { Sim } from 'simple-boot-core/decorators/SimDecorator';
import { Component } from 'simple-boot-front/decorators/Component';
import template from './domrender-dr-if-section.html'
import { OnInit } from 'simple-boot-front/lifecycle/OnInit';
import { OnInitRender } from 'dom-render/lifecycle/OnInitRender';

@Sim()
@Component({
    selector: 'domrender-dr-if-section',
    template
})
export class DomrenderDrIfSection {
    isVisible = true;

    toggle() {
        return this.isVisible = !this.isVisible;
    }
}
