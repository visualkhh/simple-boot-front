import { Component } from 'simple-boot-front/decorators/Component';
import { Sim } from 'simple-boot-core/decorators/SimDecorator';
import { OnInit } from 'simple-boot-front/lifecycle/OnInit';
import template from './core-quickstart.html'
import style from './core-quickstart.css'
import { CoreRouterTemplateSection } from '../core-router/section/template/core-router-template-section';
@Sim()
@Component({
    template,
    styles: [style],
    using: [CoreRouterTemplateSection]
})
export class CoreQuickstart implements OnInit {

    constructor() {
    }

    onInit(): void {
    }
}
