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

@Sim({scheme: 'index'})
export class Index extends Module {
    data = "default data";
    thisData = 5151;
    count = 0;

    public numbers = new class extends Module {
        constructor() {
            super('numbers', {
                template: `
                                    <ul>
                                    <!--%
                                        for (let i of this.value) {
                                            write('<li>' + i + '</li>');
                                        }
                                    %-->
                                    </ul>
                            `,
                value: [1, 2, 3]
            });
        }
    }();

    constructor(@Inject(ATitle) public title: Title, public v: ViewService, public manager: SimstanceManager, public navigation: Navigation) {
        super("index", {template: html, styleImports: [css]});
    }

    onInit() {
    }

    @PostConstruct
    test(@Inject(BTitle) title: Title) {
        console.log('-->', title)
    }

    plusCount($event: KeyboardEvent, view: View<Element>) {
        this.count++;
        console.log('scope-title->', this.title._scopes)
    }

    changeText($event: KeyboardEvent, view: View<Element>) {
        this.title.value = view.value;
        console.log('------->', this.title.value)
    }

    changeData() {
        this.numbers.value = [
            Math.floor(RandomUtils.random(1, 400)),
            Math.floor(RandomUtils.random(1, 400)),
            Math.floor(RandomUtils.random(1, 400))
        ];
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
