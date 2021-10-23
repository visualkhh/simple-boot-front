import { Component } from 'simple-boot-front/decorators/Component';
import { Sim } from 'simple-boot-core/decorators/SimDecorator';
import { OnInit } from 'simple-boot-front/lifecycle/OnInit';
import template from './front-quickstart.html'
import style from './front-quickstart.css'
import { RouterTemplateSecthion } from '../front-router/section/template/router-template-secthion';
@Sim()
@Component({
    template,
    styles: [style],
    using: [RouterTemplateSecthion]
})
export class FrontQuickstart implements OnInit {

    constructor() {
    }

    onInit(): void {
    }
}
