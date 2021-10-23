import { Component } from 'simple-boot-front/decorators/Component';
import { Sim } from 'simple-boot-core/decorators/SimDecorator';
import { OnInit } from 'simple-boot-front/lifecycle/OnInit';
import template from './core-aop.html'
import style from './core-aop.css'
@Sim()
@Component({
    template,
    styles: [style]
})
export class CoreAop implements OnInit {

    constructor() {
    }

    onInit(): void {
    }
}
