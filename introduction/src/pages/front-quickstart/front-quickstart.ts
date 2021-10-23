import { Component } from 'simple-boot-front/decorators/Component';
import { Sim } from 'simple-boot-core/decorators/SimDecorator';
import { OnInit } from 'simple-boot-front/lifecycle/OnInit';
import template from './front-quickstart.html'
import style from './front-quickstart.css'
@Sim()
@Component({
    template,
    styles: [style]
})
export class FrontQuickstart implements OnInit {

    constructor() {
    }

    onInit(): void {
    }
}
