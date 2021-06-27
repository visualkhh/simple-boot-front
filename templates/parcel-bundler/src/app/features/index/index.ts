import html from "./index.html";
import {PostConstruct, Sim} from "simple-boot-front/decorators/SimDecorator";
import {Module} from "simple-boot-front/module/Module";
import {ViewService} from "simple-boot-front/service/view/ViewService";
import {RandomUtils} from "simple-boot-front/util/random/RandomUtils";
import {View} from "simple-boot-front/service/view/View";
import {Renderer} from "simple-boot-front/render/Renderer";
import {SimstanceManager} from "simple-boot-front/simstance/SimstanceManager";
import {Navigation} from "simple-boot-front/service/Navigation";
import css from "./index.css";
import {EventListener} from "simple-boot-front/decorators/event/EventListener";
import {TestService} from "../../services/TestService";

@Sim({scheme: 'index'})
export class Index extends Module {
    data = "hello simple-boot-front";
    randomData = 99;
    randomColorData = '#000000';
    constructor(public testService: TestService, public manager: SimstanceManager, public navigation: Navigation) {
        super({template: html, styleImports: [css]});
    }
    onInit() {
    }

    random() {
        this.randomData = Math.floor(this.testService.calc(RandomUtils.random(0,55), RandomUtils.random(1,99)));
    }

    randomColor() {
        this.randomColorData = RandomUtils.getRandomColor();
    }
}
