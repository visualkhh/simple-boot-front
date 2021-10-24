import { Component } from 'simple-boot-front/decorators/Component';
import { Sim } from 'simple-boot-core/decorators/SimDecorator';
import { OnInit } from 'simple-boot-front/lifecycle/OnInit';
import template from './domrender-component.html'
import style from './domrender-component.css'
import { DomrenderComponentAttrSection } from './section/componentattr/domrender-component-attr-section';
@Sim()
@Component({
    template,
    styles: [style],
    using: [DomrenderComponentAttrSection]
})
export class DomrenderComponent implements OnInit {

    constructor() {
    }
    onInit(): void {
    }

}
