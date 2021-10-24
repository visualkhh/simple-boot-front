import { Sim } from 'simple-boot-core/decorators/SimDecorator';
import { Component } from 'simple-boot-front/decorators/Component';
import template from './domrender-function-section.html'
@Sim()
@Component({
    selector: 'domrender-function-section',
    template
})
export class DomrenderFunctionSection {
    title = 'view Template engine'
}
