import { Component } from 'simple-boot-front/decorators/Component';
import { Sim } from 'simple-boot-core/decorators/SimDecorator';
import { OnInit } from 'simple-boot-front/lifecycle/OnInit';
import template from './core-router.html'
import style from './core-router.css'
import { CoreRouterconfigSection } from './section/routerconfig/core-routerconfig-section';
import { CoreRouterTemplateSection } from './section/template/core-router-template-section';
import { CoreRoutermappingSection } from './section/routermapping/core-routermapping-section';
import { CoreRoutercurrentSection } from './section/routercurrent/core-routercurrent-section';
import { CoreRouteractionSection } from './section/routeraction/core-routeraction-section';
@Sim()
@Component({
    template,
    styles: [style],
    using: [CoreRouterconfigSection, CoreRouterTemplateSection, CoreRoutermappingSection, CoreRoutercurrentSection, CoreRouteractionSection]
})
export class CoreRouter implements OnInit {

    constructor() {
    }

    onInit(): void {
    }
}
