import { Sim } from 'simple-boot-core/decorators/SimDecorator';
import { Component } from 'simple-boot-front/decorators/Component';
import template from './domrender-function-secthion.html'
@Sim()
@Component({
    selector: 'domrender-function-secthion',
    template
})
export class DomrenderFunctionSecthion {
    title = 'View Template engine'
}
