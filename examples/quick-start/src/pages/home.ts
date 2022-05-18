import { Component } from 'simple-boot-front/decorators/Component';
import { Sim } from 'simple-boot-core/decorators/SimDecorator';
import template from './home.html';
import {ConcatScript} from '../scripts/concat.script';
@Sim()
@Component({
    template,
    using: [ConcatScript]
})
export class Home {
    name = 'home';
    toggle = false;
}
