import html from './index.html';
import {Sim} from 'simple-boot-front/decorators/SimDecorator';
import {Module} from 'simple-boot-front/module/Module';
import {RandomUtils} from 'simple-boot-front/util/random/RandomUtils';

export class Index extends Module {
    template = html;
    data = 'default data';
    title = new (class extends Module {
        data = '';
        wrapElement = 'span';
    })();

    numbers = new (class extends Module {
        datas = [1, 2, 3];
        template = '<ul>{{#each datas as |data i|}}<li>{{data}}</li>{{/each}}</ul>';
    })();

    test() {
        console.log('test');
    }

    changeText($event, view) {
        this.title.data = view.value;
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
