import {Module} from "simple-boot-front/module/Module";
import {Sim} from "simple-boot-front/decorators/SimDecorator";

@Sim({scheme: 'title'})
export class Title extends Module {
    constructor() {
        super('titleAnno' , {template: 'aa<!--% write(this.value) %-->aa', value:4444});
    }
}
