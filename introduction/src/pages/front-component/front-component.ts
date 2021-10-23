import { Component } from 'simple-boot-front/decorators/Component';
import { Sim } from 'simple-boot-core/decorators/SimDecorator';
import { OnInit } from 'simple-boot-front/lifecycle/OnInit';
import template from './front-component.html'
import style from './front-component.css'
import { DomrenderComponentTemplateSection } from '../domrender-component/section/component/domrender-component-template-section';
@Sim()
@Component({
    template,
    styles: [style],
    using: [DomrenderComponentTemplateSection]
})
export class FrontComponent implements OnInit {

    constructor() {
    }

    onInit(): void {
    }
}
