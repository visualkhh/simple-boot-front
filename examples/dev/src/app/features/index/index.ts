import html from './index.html';
import {PostConstruct, Sim} from 'simple-boot-core/decorators/SimDecorator';
import {FrontModule} from 'simple-boot-front/module/FrontModule';
import {ViewService} from 'simple-boot-front/service/view/ViewService';
import {RandomUtils} from 'simple-boot-core/utils/random/RandomUtils';
import {View} from 'simple-boot-front/service/view/View';
import {Renderer} from 'simple-boot-front/render/Renderer';
import {SimstanceManager} from 'simple-boot-core/simstance/SimstanceManager';
import {Navigation} from 'simple-boot-front/service/Navigation';
import {Intent} from 'simple-boot-core/intent/Intent';

@Sim({scheme: 'index'})
export class Index extends FrontModule {
    data = 'default data';
    thisData = 5151;
    public title = new class extends FrontModule {
        constructor() {
            super({styleImports: ['/*[module-selector]*/ {color: red}'], value: ''});
        }
    }();

    public numbers = new class extends FrontModule {
        public value = [1, 2, 3];

        constructor() {
            super({
                template: `
        <ul>
        <!--%
            for (let i of this.value) {
                write('<li>' + i + '</li>');
            }
        %-->
        </ul>
        `
            });
        }
    }();

    constructor(public v: ViewService, public manager: SimstanceManager, public navigation: Navigation) {
        super({template: html});
    }

    onInit() {
    }

    test() {
    }

    changeText($event: KeyboardEvent, view: View<Element>) {
        console.log('--->', view.value)
        this.title.value = view.value;
    }

    changeData() {
        this.numbers.value = [
            Math.floor(RandomUtils.random(1, 400)),
            Math.floor(RandomUtils.random(1, 400)),
            Math.floor(RandomUtils.random(1, 400))
        ];
        this.publish(new Intent<any, Event>('ajax://goo', this.numbers));
    }

    thisDataChange() {
        this.thisData = Math.floor(RandomUtils.random(1, 400));
        console.log('thisDataChange', this.thisData)
    }

    go($event: KeyboardEvent, view: View<Element>) {
        $event.preventDefault();
    }

    goto() {
        console.log('-->na', this.navigation)
        this.navigation.go('exception');
    }

    @PostConstruct
    public post(renderer: Renderer) {
    }
}
