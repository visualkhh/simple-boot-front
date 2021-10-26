import { Sim } from 'simple-boot-core/decorators/SimDecorator';
import { Component } from 'simple-boot-front/decorators/Component';
import template from './domrender-expression-section.html'
import { OnInit } from 'simple-boot-front/lifecycle/OnInit';
import { OnInitRender } from 'dom-render/lifecycle/OnInitRender';

@Sim()
@Component({
    selector: 'domrender-expression-section',
    template
})
export class DomrenderExpressionSection  {
    first = 'simple';
    middle = 'boot';
    last = 'front';

    getFullName() {
        return this.first + this.middle + this.last;
    }

    onInitRender() {
    }

    getStrongTagFullName() {
        return `<strong>${this.getFullName()}</strong>`
    }
}
