import template from './index.html';
import { PostConstruct, Sim } from 'simple-boot-core/decorators/SimDecorator';
import css from './index.css'
import { User } from './User';
import { Component } from 'simple-boot-front/decorators/Component';
import { RandomUtils } from 'simple-boot-core/utils/random/RandomUtils';

@Sim({scheme: 'index'})
@Component({
    template,
    styles: [css]
})
export class Index {
    public user?: User;
    public data = {name: 'visualkhh'}
    public cnt1 = 0;
    public cnt2 = 0;
    public test = {name: 'test', age:2}
    public randomColorData = '#ff0000';
    onInit() {
        console.log('-->')
    }

    @PostConstruct
    public g(s: User) {
    }

    randomColor() {
        console.log('------',this)
        this.randomColorData = RandomUtils.getRandomColor();
    }
}
