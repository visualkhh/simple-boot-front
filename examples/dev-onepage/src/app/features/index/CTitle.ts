import {Title} from "./Title";
import {RandomUtils} from "../../../../../../dist/util/random/RandomUtils";
import {PostConstruct, Sim} from "simple-boot-front/decorators/SimDecorator";
import {Injectable} from "simple-boot-front/decorators/Injectable";
import {TestService} from "../../services/TestService";
import {Inject} from "simple-boot-front/decorators/Inject";

@Injectable()
// @Sim()
export class CTitle extends Title {
    constructor(public testService: TestService) {
        super('Ctitle', {
            template: 'value:(<!--% write(this.value) %--> <button module-event-click="cc">CC</button>)',
            value: 'zz'
        });
        console.log('ctitle constructor-->', this.testService)
    }

    cc() {
        this.value = this.testService.tail(Math.floor(RandomUtils.random(1, 50)), '---');
        // this.value = this.projectService.tail(Math.floor(RandomUtils.random(1, 50)), '---');
    }

    @PostConstruct
    ttt(testService: TestService) {
        console.log('poo->', testService)
    }
}
