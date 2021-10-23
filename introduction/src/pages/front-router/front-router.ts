import { Component } from 'simple-boot-front/decorators/Component';
import { Sim } from 'simple-boot-core/decorators/SimDecorator';
import { OnInit } from 'simple-boot-front/lifecycle/OnInit';
import template from './front-router.html'
import style from './front-router.css'
import { RouterTemplateSection } from './section/template/router-template-section';
import { CoreRouterconfigSection } from '../core-router/section/routerconfig/core-routerconfig-section';
import { CoreRouterTemplateSection } from '../core-router/section/template/core-router-template-section';
import { CoreRoutermappingSection } from '../core-router/section/routermapping/core-routermapping-section';
import { CoreRoutercurrentSection } from '../core-router/section/routercurrent/core-routercurrent-section';
import { CoreRouteractionSection } from '../core-router/section/routeraction/core-routeraction-section';
@Sim()
@Component({
    template,
    styles: [style],
    using: [RouterTemplateSection, CoreRouterconfigSection, CoreRouterTemplateSection, CoreRoutermappingSection, CoreRoutercurrentSection, CoreRouteractionSection]
})
export class FrontRouter implements OnInit {

    constructor() {
    }

    onInit(): void {
    }

}
