import {Sim} from "simple-boot-front/decorators/SimDecorator";
import {Title} from "./Title";

@Sim({scheme: 'aTitle'})
export class ATitle extends Title {
    constructor() {
        super('Atitle', {
            template: 'value:(<!--% write(this.value) %--> <button module-event-click="aa">aa</button>)',
            value: 111
        });
    }
}
