import { Component } from 'simple-boot-front/decorators/Component';
import { Sim } from 'simple-boot-core/decorators/SimDecorator';
import { OnInit } from 'simple-boot-front/lifecycle/OnInit';
import template from './domrender-quickstart.html'
import style from './domrender-quickstart.css'
import { RouterTemplateSection } from '../front-router/section/template/router-template-section';
@Sim()
@Component({
    template,
    styles: [style],
    using: [RouterTemplateSection]
})
export class DomrenderQuickstart implements OnInit {

    constructor() {
    }

    onInit(): void {
    }
}
