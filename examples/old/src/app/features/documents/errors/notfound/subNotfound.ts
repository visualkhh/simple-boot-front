import css from "app/features/documents/errors/notfound/notfound.css";
import template from "app/features/documents/errors/notfound/notfound.html";
import { Sim } from "simple-boot-core/decorators/SimDecorator";
import { Component } from 'simple-boot-front/decorators/Component';

@Sim()
@Component({template, styles: [css]})
export class SubNotfound {
    public name = 'sub_error'

    onInit() {
    }

}
