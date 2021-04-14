import {Module} from 'simple-boot-front/module/Module';
import {Router} from 'simple-boot-front/module/Router';
import {Sim} from "simple-boot-front/decorators/SimDecorator";
import {SimpleApplication} from "simple-boot-front";
import {AjaxService} from "simple-boot-front/service/AjaxService";

class profile extends Module {
    template = '<div style="border: 5px dashed"><img src="{{{src}}}"><div>{{name}}</div></div>'
}

class index extends Module {
    styleImports = ['h1{background-color:pink}']
    template = '<h1>index</h1> <a href="#hello">hello</a> {{{p}}} <span module-isolate="value">{{value}}</span> <button module-event-click="change">click</button>'
    value = 1
    change() {
        this.value = (Math.random()*100).toFixed(0);
        new AjaxService().getJson('https://randomuser.me/api/').subscribe(it => {
            this.p.src = it.results[0].picture.large;
            this.p.name = it.results[0].email;
        })
    }
    onInit() {
        this.p = new profile();
        this.p.src = 'https://randomuser.me/api/portraits/women/72.jpg'
        this.p.name = 'Deann Bradley'
    }
}Sim()(index)

class hello extends Module {
    styleImports = ['h1{background-color:red}']
    template = '<h1>hello</h1> <a href="#">index</a> {{{p}}}'

    onInit() {
        this.p = new profile();
        this.p.src = 'https://randomuser.me/api/portraits/women/84.jpg'
        this.p.name = 'Denny'
    }
}Sim()(hello)



class layout extends Module {
    styleImports = ['div{background-color:gold} .active {font-size: 30px}']
    template = `<div>header [<a href="#" router-active-class="['active']">index</a> / <a href="#hello" router-active-class="['active']">hello</a>]</div>  <div [router-outlet]></div>  <div>footer</div>`
}Sim()(layout)

class router extends Router {
    module = layout
    '' = index
    'hello' = hello
}
Sim()(router)

new SimpleApplication(router).run();
