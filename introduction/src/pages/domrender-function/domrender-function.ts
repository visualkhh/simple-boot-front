import { Component } from 'simple-boot-front/decorators/Component';
import { Sim } from 'simple-boot-core/decorators/SimDecorator';
import { OnInit } from 'simple-boot-front/lifecycle/OnInit';
import template from './domrender-function.html'
import style from './domrender-function.css'
import { DomrenderExpressionSection } from './secction/expression/domrender-expression-section';
import { DomrenderDrIfSection } from './secction/dr-if/domrender-dr-if-section';
@Sim()
@Component({
    template,
    styles: [style],
    using: [DomrenderExpressionSection, DomrenderDrIfSection]
})
export class DomrenderFunction implements OnInit {

    constructor() {
    }

    onInit(): void {
    }
}
