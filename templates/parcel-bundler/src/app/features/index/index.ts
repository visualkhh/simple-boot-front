import html from './index.html';
import {RandomUtils} from 'simple-boot-front/util/random/RandomUtils';
import {SimstanceManager} from 'simple-boot-front/simstance/SimstanceManager';
import {Navigation} from 'simple-boot-front/service/Navigation';
import css from './index.css';
import {TestService} from '../../services/TestService';
import {FrontModule} from 'simple-boot-front/module/FrontModule';
import {Sim} from 'simple-boot-core/decorators/SimDecorator';

@Sim({scheme: 'index'})
export class Index extends FrontModule {
    data = 'hello simple-boot-front';
    randomData = 99;
    randomColorData = '#000000';
    constructor(public testService: TestService, public manager: SimstanceManager, public navigation: Navigation) {
        super({template: html, styleImports: [css]});
    }

    onInit() {
    }

    random() {
        this.randomData = Math.floor(this.testService.calc(RandomUtils.random(0, 55), RandomUtils.random(1, 99)));
    }

    randomColor() {
        this.randomColorData = RandomUtils.getRandomColor();
    }
}
