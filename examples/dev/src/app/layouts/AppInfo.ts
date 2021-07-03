import {FrontModule} from "simple-boot-front/module/FrontModule";
import {Intent} from 'simple-boot-core/intent/Intent';
import {View} from "simple-boot-front/service/view/View";

export class AppInfo extends FrontModule {
    datas = 'default data';

    constructor() {
        super({template: '<div><h3>info</h3><!--%write(this.datas)%--></div>'});
    }

    data(i: Intent) {
        this.datas = i.data + '->' + i.params.aa
    }
    viewSubscribe(i: Intent<View<HTMLInputElement>>) {
        this.datas = i.data?.value + '->' + i.params.aa + '-->' + i.event
    }
}
