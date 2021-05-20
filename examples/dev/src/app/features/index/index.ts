import html from "./index.html";
import {PostConstruct, Sim} from "simple-boot-front/decorators/SimDecorator";
import {Module} from "simple-boot-front/module/Module";
import {ViewService} from "simple-boot-front/service/view/ViewService";
import {RandomUtils} from "simple-boot-front/util/random/RandomUtils";
import {View} from "simple-boot-front/service/view/View";
import {Renderer} from "simple-boot-front/render/Renderer";
import {SimstanceManager} from "simple-boot-front/simstance/SimstanceManager";
import {RouterManager} from "simple-boot-front/router/RouterManager";
import {Navigation} from "simple-boot-front/service/Navigation";

// @After({type: Index, target: 'aa'})
// @Reflect.metadata("design:type", Number)
@Sim({scheme: 'index'})
export class Index extends Module {
    template = html;
    data = "default data";
    thisData = 5151;
    public title = new class extends Module {
        public value = "";
        public wrapElement = "span";
    }();
    public numbers = new class extends Module {
        public datas = [1, 2, 3];
        template = `
        <ul>
        {%
            for (let i of this.datas) {
                write('<li>' + i + '</li>');
            }
        %}
        </ul>
        `
    }();

    constructor(public v: ViewService, public manager: SimstanceManager, public navigation: Navigation) {
        super("index");
    }

    onInit() {
    }

    test() {
    }

    changeText($event: KeyboardEvent, view: View<Element>) {
        this.title.value = view.value;
    }

    changeData() {
        this.numbers.datas = [
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
