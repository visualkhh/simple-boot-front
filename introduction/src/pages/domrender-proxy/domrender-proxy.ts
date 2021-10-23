import { Component } from 'simple-boot-front/decorators/Component';
import { Sim } from 'simple-boot-core/decorators/SimDecorator';
import { OnInit } from 'simple-boot-front/lifecycle/OnInit';
import template from './domrender-proxy.html'
import style from './domrender-proxy.css'
@Sim()
@Component({
    template,
    styles: [style]
})
export class DomrenderProxy implements OnInit {

    constructor() {
    }
    onInit(): void {
    }

}
