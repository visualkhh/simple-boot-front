import {Module} from "simple-boot-front/module/Module";
import {Sim} from "simple-boot-front/decorators/SimDecorator";

@Sim({scheme: 'title'})
export class Title extends Module {
    constructor() {
        super('titleAnno' , {template: 'value:(<!--% write(this.value) %-->)', value:4444});
    }
}
