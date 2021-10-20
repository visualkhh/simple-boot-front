import template from './index.html';
import {Sim} from 'simple-boot-core/decorators/SimDecorator';
import {ViewService} from 'simple-boot-front/service/view/ViewService';
import {RandomUtils} from 'simple-boot-core/utils/random/RandomUtils';
import {SimstanceManager} from 'simple-boot-core/simstance/SimstanceManager';
import {Navigation} from 'simple-boot-front/service/Navigation';
import { Component } from 'simple-boot-front/decorators/Component';
import { SayScript } from '../../scripts/SayScript';
import { Profile } from '../../shareds/Profile';
import { ScriptService } from 'simple-boot-front/service/ScriptService';
import { TempScript } from '../../scripts/TempScript';
@Sim({scheme: 'index'})
@Component({
    template,
    using:[SayScript, Profile, TempScript]
})
export class Index {
    data = 'default data';
    tData = 5151;
    public friends = [{name: 'z'}, {name: 'b'}, {name: 'c'}]
    constructor(public scriptService: ScriptService, public simstanceManager: SimstanceManager, public navigation: Navigation) {
        // const script = scriptService.getScript('say');
        // scriptService.getScript('say');
        // scriptService.getScript('say');
        // const script1 = scriptService.getScript('temp');
        // scriptService.getScript('temp');
        // scriptService.getScript('temp');
        // console.log('------', script, script1)
    }

    // onInit() {
    // }
    //
    // test() {
    // }
    //
    // changeText($event: KeyboardEvent, view: View<Element>) {
    //     console.log('--->', view.value)
    //     // this.title.value = view.value;
    // }
    //
    // changeData() {
    //     // this.numbers.value = [
    //     //     Math.floor(RandomUtils.random(1, 400)),
    //     //     Math.floor(RandomUtils.random(1, 400)),
    //     //     Math.floor(RandomUtils.random(1, 400))
    //     // ];
    //     // this.publish(new Intent<any, Event>('ajax://goo', this.numbers));
    // }
    //
    tDataChange() {
        this.tData = Math.floor(RandomUtils.random(1, 400));
        console.log('thisDataChange', this.tData)
    }
    //
    // go($event: KeyboardEvent, view: View<Element>) {
    //     $event.preventDefault();
    // }
    //
    say() {
       console.log('say~')
    }
    goto() {
        console.log('-->na', this.navigation)
        this.navigation.go('/exception');
    }
    //
    // gotoUser() {
    //     console.log('-->na', this.navigation)
    //     this.navigation.go('/user/' + RandomUtils.uuid());
    // }
    //
    // @PostConstruct
    // public post(renderer: Renderer) {
    // }
}
