import { Navigation } from 'simple-boot-front/service/Navigation';
import css from './index.css';
import template from './index.html';
import { TestService } from '../../services/TestService';
import { Sim } from 'simple-boot-core/decorators/SimDecorator';
import { SimstanceManager } from 'simple-boot-core/simstance/SimstanceManager';
import { RandomUtils } from 'simple-boot-core/utils/random/RandomUtils';
import { Component } from 'simple-boot-front/decorators/Component';

@Sim({scheme: 'index'})
@Component({template, styles: [css]})
export class Index {
    data = 'hello simple-boot-front';
    randomData = 99;
    randomColorData = '#000000';

    constructor(public testService: TestService, public manager: SimstanceManager, public navigation: Navigation) {
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
