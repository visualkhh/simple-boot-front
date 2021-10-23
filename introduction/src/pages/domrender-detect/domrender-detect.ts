import { Component } from 'simple-boot-front/decorators/Component';
import { Sim } from 'simple-boot-core/decorators/SimDecorator';
import { OnInit } from 'simple-boot-front/lifecycle/OnInit';
import template from './domrender-detect.html'
import style from './domrender-detect.css'
@Sim()
@Component({
    template,
    styles: [style]
})
export class DomrenderDetect implements OnInit {

    constructor() {
    }
    onInit(): void {
    }

}
