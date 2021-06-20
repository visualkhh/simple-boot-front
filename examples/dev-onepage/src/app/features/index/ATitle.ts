import {Sim} from "simple-boot-front/decorators/SimDecorator";
import {Title} from "./Title";

@Sim({scheme: 'aTitle'})
export class ATitle extends Title {
    adata = {name: 'kim', age: 44}
    constructor() {
        super('Atitle', {
            template: 'value:(<!--% write(this.value) %--> <button module-event-click="aa">aa</button>)',
            value: 111
        });
        console.log('ATitle Constructor')
    }
}
