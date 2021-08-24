import {UserResponse} from '../../models/UserResponse';
import {ProjectService} from '../../services/ProjectService';
import css from './ajax.css';
import template from './ajax.html';
import { PostConstruct, Sim } from 'simple-boot-core/decorators/SimDecorator';
import {HttpService} from 'simple-boot-front/service/HttpService';
import {Intent} from 'simple-boot-core/intent/Intent';
import { Component } from 'simple-boot-front/decorators/Component';
import { SimFrontOption } from 'simple-boot-front/option/SimFrontOption';
import { Profile } from '../../shareds/Profile';
import { User } from '../../models/UserResponse';
import { FrontLifeCycle } from 'simple-boot-front/module/FrontLifeCycle';

@Sim({scheme: 'ajax'})
@Component({template, styles: [css]})
export class Ajax implements FrontLifeCycle {
    public data: UserResponse | undefined;
    public profile?: Profile;
    constructor(public option: SimFrontOption, public ajax: HttpService) {
        console.log('--->profile',  this.profile)
    }

    onInit(): void {
        this.data = undefined;
        this.loadData();
        console.log('Method not implemented.');
    }
    onChangedRender(): void {
        console.log('Method not implemented.');
    }
    onInitedChild(): void {
        console.log('Method not implemented.');
    }
    onFinish(): void {
        console.log('Method not implemented.');
    }
    onCreate(): void {
        console.log('Method not implemented.');
    }


    post() {
    }
    // createProfile() {
    //     return Component.create(new Profile());
    // }

    sync() {
        this.profile?.setUser(this.data?.results[0])
        console.log('-->this.profile', this.profile)
    }

    goo(intent: Intent) {
        console.log('-->', intent)
    }

    loadData() {
        fetch('https://randomuser.me/api/')
            .then((response) => response.json())
            .then((myJson: UserResponse) => {
                this.data = myJson;
                this.sync();
            });
    }

}
