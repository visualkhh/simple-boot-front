import {Sim} from "simple-boot-front/decorators/SimDecorator";
import {Title} from "./Title";
import {TestService} from "../../services/TestService";

@Sim({scheme: 'aTitle'})
export class ATitle extends Title {
    adata = {name: 'kim', age: 44}
    constructor(testService: TestService) {
        super({
            template: 'value:(<!--% write(this.value) %--> <button module-event-click="aa">aa</button>)',
            styleImports: ["/*[module-selector]*/ {color: red}"],
            value: 111
        });
        console.log('ATitle Constructor', testService)
    }
}
