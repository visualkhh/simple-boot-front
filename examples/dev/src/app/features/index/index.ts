import template from './index.html';
import {PostConstruct, Sim} from 'simple-boot-core/decorators/SimDecorator';
import {ViewService} from 'simple-boot-front/service/view/ViewService';
import {RandomUtils} from 'simple-boot-core/utils/random/RandomUtils';
import {View} from 'simple-boot-front/service/view/View';
import {Renderer} from 'simple-boot-front/render/Renderer';
import {SimstanceManager} from 'simple-boot-core/simstance/SimstanceManager';
import {Navigation} from 'simple-boot-front/service/Navigation';
import {Intent} from 'simple-boot-core/intent/Intent';
import { Component } from 'simple-boot-front/decorators/Component';

@Sim({scheme: 'index'})
@Component({template})
export class Index {
    data = 'default data';
    thisData = 5151;
    constructor(public v: ViewService, public simstanceManager: SimstanceManager, public navigation: Navigation) {
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
    // thisDataChange() {
    //     this.thisData = Math.floor(RandomUtils.random(1, 400));
    //     console.log('thisDataChange', this.thisData)
    // }
    //
    // go($event: KeyboardEvent, view: View<Element>) {
    //     $event.preventDefault();
    // }
    //
    // goto() {
    //     console.log('-->na', this.navigation)
    //     this.navigation.go('/exception');
    // }
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
