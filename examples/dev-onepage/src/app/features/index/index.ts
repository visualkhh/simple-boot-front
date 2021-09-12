import template from './index.html';
import { PostConstruct, Sim } from 'simple-boot-core/decorators/SimDecorator';
import css from './index.css'
import { User } from './User';
import { Component } from 'simple-boot-front/decorators/Component';
import { RandomUtils } from 'simple-boot-core/utils/random/RandomUtils';
import { FrontLifeCycle } from 'simple-boot-front/module/FrontLifeCycle';

@Sim({scheme: 'index'})
@Component({
    template,
    styles: [css]
})
export class Index implements FrontLifeCycle {

    public user?: User;
    public data = {name: 'visualkhh'}
    public cnt1 = 0;
    public cnt2 = 0;
    public test = {name: 'test', age:2}
    public randomColorData = '#ff0000';
    public date = new Date();


    onChangedRender(): void {
        console.log('index--> onChangedRender')
    }
    onInitedChild(): void {
        console.log('index--> onInitedChild')
    }
    onFinish(): void {
        console.log('index--> onFinish')
    }
    onCreate(): void {
        console.log('index--> onCreate')
    }
    onInit() {
        console.log('index--> onInit')
        // console.log(document.querySelector('body')?.innerHTML)
    }
    @PostConstruct
    public g(s: User) {
    }

    randomColor() {
        console.log('------',this)
        this.randomColorData = RandomUtils.getRandomColor();
    }
}
