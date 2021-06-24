import {Sim} from "simple-boot-front/decorators/SimDecorator";
import {Title} from "./Title";

@Sim({scheme: 'bTitle'})
export class BTitle extends Title {
    constructor() {
        super({
            template: 'value:(<!--% write(this.value) %--> <button module-event-click="aa">bb</button>)',
            value: 4444
        });
    }
}
