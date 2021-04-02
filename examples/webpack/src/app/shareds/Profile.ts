import {Module} from 'simple-boot-front/module/Module'
import {User} from '@src/app/models/UserResponse'
import html from './profile.html'

export class Profile extends Module {
    template= html;
    private data: User | undefined;

    constructor() {
        super('profile')
    }

    public setUser(data: User) {
        this.data = data;
    }
}
