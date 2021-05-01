import html from "./index.html";
import {PostConstruct, Sim} from "simple-boot-front/decorators/SimDecorator";
import {Module} from "simple-boot-front/module/Module";
import {ViewService} from "simple-boot-front/service/view/ViewService";
import {RandomUtils} from "simple-boot-front/util/random/RandomUtils";
import {View} from "simple-boot-front/service/view/View";
import {Navigation} from "simple-boot-front/service/Navigation";
import {Renderer} from "simple-boot-front/render/Renderer";

@Sim()
export class Index extends Module {
    template = html;

    data = "default data";

    public title = new class extends Module {
        public value = "";
        public wrapElement = "span";
    }();

    public numbers = new class extends Module {
        public datas = [1, 2, 3];
        template = "<ul>{{#each datas as |data i|}}<li>{{data}}</li>{{/each}}</ul>";
    }();

    constructor(public v: ViewService, public navigation: Navigation) {
        super("index");
    }

    onInit() {}

    test() {
        console.log("test");
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

    go($event: KeyboardEvent, view: View<Element>) {
        $event.preventDefault();
    }

    goto() {
        const state = { 'page_id': 1, 'user_id': 5 }
        const title = 'ttttt'
        const url = 'hello-world.html'
        // history.replaceState({page: 3}, "title 3", "?page=3");
        history.pushState(state, title, url)
        // history.pushState = ( f => function pushState(){
        //     var ret = f.apply(this, arguments);
        //     window.dispatchEvent(new Event('pushstate'));
        //     window.dispatchEvent(new Event('locationchange'));
        //     return ret;
        // })(history.pushState);
    }

    @PostConstruct()
    public post(renderer: Renderer) {
        //console.log('post-->', renderer)
    }
}
