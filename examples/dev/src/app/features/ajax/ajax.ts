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
import { LifeCycle } from 'simple-boot-core/cycles/LifeCycle';
import { User } from '../../models/UserResponse';

@Sim({scheme: 'ajax'})
@Component({template, styles: [css]})
export class Ajax implements LifeCycle{
    public data: UserResponse | undefined;
    public profile?: Profile;
    constructor(public option: SimFrontOption, public ajax: HttpService) {
        console.log('--->profile',  this.profile)
    }

    onCreate(): void {
        this.data = undefined;
        this.profile = Component.create(new Profile());
        this.loadData();
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
