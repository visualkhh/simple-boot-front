import {UserResponse} from 'app/models/UserResponse';
import {ProjectService} from 'app/services/ProjectService';
import css from 'app/features/ajax/ajax.css';
import template from 'app/features/ajax/ajax.html';
import { PostConstruct, Sim } from 'simple-boot-core/decorators/SimDecorator';
import {HttpService} from 'simple-boot-front/service/HttpService';
import {Intent} from 'simple-boot-core/intent/Intent';
import { Component } from 'simple-boot-front/decorators/Component';
import { SimFrontOption } from 'simple-boot-front/option/SimFrontOption';
import { Profile } from 'app/shareds/Profile';
import { User } from 'app/models/UserResponse';
import { OnInit } from 'simple-boot-front/lifecycle/OnInit';

@Sim({scheme: 'ajax'})
@Component({template, styles: [css]})
export class Ajax implements OnInit {
    public data: UserResponse | undefined;
    private profile: User | undefined;
    constructor(public option: SimFrontOption, public ajax: HttpService) {
    }

    onInit(): void {
        this.data = undefined;
        console.log('onInit-->Method not implemented.');
    }

    post() {
    }
    // createProfile() {
    //     return Component.create(new Profile());
    // }

    goo(intent: Intent) {
        // console.log('-->', intent)
    }

    loadData() {
        fetch('https://randomuser.me/api/')
            .then((response) => response.json())
            .then((myJson: UserResponse) => {
                this.data = myJson;
                this.profile = this.data?.results[0];
            });
    }

}
