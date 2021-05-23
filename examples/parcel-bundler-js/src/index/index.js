import html from './index.html';
import {Sim} from 'simple-boot-front/decorators/SimDecorator';
import {Module} from 'simple-boot-front/module/Module';
import {RandomUtils} from 'simple-boot-front/util/random/RandomUtils';

export class Index extends Module {
    template = html;
    data = 'default data';
    title = new (class extends Module {
        value = '';
        wrapElement = 'span';
    })();

    numbers = new (class extends Module {
        datas = [1, 2, 3];
        template = `
        <ul>
        {%
            for (let i of this.datas) {
                write('<li>' + i + '</li>');
            }
        %}
        </ul>
        `
    })();

    test() {
        console.log('test');
    }

    changeText($event, view) {
        this.title.value = view.value;
    }

    changeData() {
        this.numbers.datas = [
            Math.floor(RandomUtils.random(1, 400)),
            Math.floor(RandomUtils.random(1, 400)),
            Math.floor(RandomUtils.random(1, 400))
        ];
    }
}
Sim()(Index)
