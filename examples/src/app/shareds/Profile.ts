import {User} from '../models/UserResponse';
import { Component } from 'simple-boot-front/decorators/Component';

const styles = [
    `div.card {
        border: solid 1px;
        padding: 10px;
        margin: 10px;
    }`];
const template = `
<h1>profile</h1>
<div class="card" style="width: 18rem;">
  <button dr-event-click="console.log('-------')">ddd</button>
</div>
`;

@Component({
    template, styles
})
export class Profile {
    // private data: User = {name: {title:'zz'}};
    private data: User | undefined;

    constructor() {
    }

    public setUser(data?: User) {
        console.log('-setUser', this, data)
        this.data = data;
    }
}
