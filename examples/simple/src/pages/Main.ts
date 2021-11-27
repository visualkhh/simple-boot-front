import { Sim } from 'simple-boot-core/decorators/SimDecorator';
import { Component } from 'simple-boot-front/decorators/Component';
import template from './main.html';
@Sim()
@Component({
    template
})
export class Main {

}
