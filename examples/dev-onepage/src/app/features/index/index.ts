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
import {Title} from "./Title";
import {Inject} from "simple-boot-front/decorators/Inject";
import {ATitle} from "./ATitle";
import {BTitle} from "./BTitle";
import {SimGlobal} from "simple-boot-front/global/SimGlobal";
import {CTitle} from "./CTitle";

@Sim({scheme: 'index'})
export class Index extends Module {
    data = "default data";
    thisData = 5151;
    count = 0;
    size = 10;

    public title2 = new class extends Module {
        constructor() {
            super({value: '4444444'});
        }
    }();

    public numbers = new class extends Module {
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
                                    <button module-event-click="aa">aaa</button>
                            `,
                value: [1, 2, 3]
            });
        }
        aa() {
            console.log('number clikc => ', this.value);
        }
    }();

    constructor(@Inject(ATitle) public title: Title, public v: ViewService, public manager: SimstanceManager, public navigation: Navigation) {
        super({template: html, styleImports: [css], modules: {'cmodule': CTitle}, name: 'index'});
    }

    onInit() {
    }

    @PostConstruct
    test(@Inject(BTitle) title: Title) {
        // console.log('-->', title)
    }

    // public m = BTitle;
    // createModule() {
    //     return new BTitle();
    // }

    plusCount($event: KeyboardEvent, view: View<Element>) {
        console.log('this.count--> ', this.count);
        this.count++;
    }
    plusSize($event: KeyboardEvent, view: View<Element>) {
        console.log('--->', this._refModule)
        this.size++;
    }
    minusCount($event: KeyboardEvent, view: View<Element>) {
        console.log('this.count--> ', this.count);
        this.count--;
    }

    changeText($event: KeyboardEvent, view: View<Element>) {
        // this.title.value = view.value;
        this.title.datas.push(Math.floor(RandomUtils.random(1, 400)));
        console.log('--->', this.title.datas)
        // (this.title as ATitle).adata.name='zz'
        // console.log('------->', this.title.value)
        // console.log('------->', (SimGlobal.application?.simstanceManager as any)['_storage'])
    }

    inputChange($event: InputEvent, view: View<Element>) {
        console.log('--inputChange----->', $event.data, view)
    }

    changeData() {
        console.log('-->changeData')
        this.numbers.value = [
            Math.floor(RandomUtils.random(1, 400)),
            Math.floor(RandomUtils.random(1, 400)),
            Math.floor(RandomUtils.random(1, 400))
        ];
    }

    public randomColor(): string {
        return RandomUtils.getRandomColor();
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
