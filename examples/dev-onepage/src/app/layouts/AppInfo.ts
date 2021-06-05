import css from "./app.css"
import html from './app.html'
import {Module} from "simple-boot-front/module/Module";
import {Sim} from "simple-boot-front/decorators/SimDecorator";
import {AjaxService} from "simple-boot-front/service/AjaxService";
import {SimstanceManager} from "simple-boot-front/simstance/SimstanceManager";
import {Intent} from 'simple-boot-front/intent/Intent';
import {Renderer} from 'simple-boot-front/render/Renderer';
import {View} from "simple-boot-front/service/view/View";

export class AppInfo extends Module {
    datas = 'default data';

    constructor(datas: string) {
        super('appInfo', {template: '<div><h3>info</h3>{%write(this.datas)%}</div>'});
        this.datas = datas;
    }

    data(i: Intent) {
        this.datas = i.data + '->' + i.params.aa
    }
    viewSubscribe(i: Intent<View<HTMLInputElement>>) {
        this.datas = i.data?.value + '->' + i.params.aa + '-->' + i.event
    }
}
