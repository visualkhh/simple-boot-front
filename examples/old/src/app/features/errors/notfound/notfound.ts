import { Component } from 'simple-boot-front/decorators/Component';
import { Sim } from 'simple-boot-core/decorators/SimDecorator';
import template from 'app/features/errors/notfound/notfound.html'
import css from 'app/features/errors/notfound/notfound.css'
@Sim()
@Component({template, styles: [css]})
export class Notfound {
    public name = 'notfound'
    constructor() {
    }

    onInit() {
    }
}
