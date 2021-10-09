import {User} from '../models/UserResponse';
import { Component } from 'simple-boot-front/decorators/Component';

const styles = [
    `div.card {
        border: solid 1px;
        padding: 10px;
        margin: 10px;
    }`];
import template from './Profile.html'

@Component({
    template, styles
})
export class Profile {
    // private data: User = {name: {title:'zz'}};
    private data: User | undefined;
    public currentOptionValue = 'f2';
    public options: {key: string, title: string}[] = [{key: 'f1', title: 'f1name'}, {key: 'f2', title: 'f2name'}]
    constructor() {
    }

    public setUser(data?: User) {
        console.log('-setUser', this, data)
        this.data = data;
    }


    public changeOption() {
        console.log('--changeOption')
        this.currentOptionValue = 'f2'
    }
}
