import { Component } from 'simple-boot-front/decorators/Component';
import { TestService } from '../services/TestService';
import { User } from '../features/index/User';

const styles = [
    `div.card {
        border: solid 1px;
        padding: 10px;
        margin: 10px;
    }`];
const template = `
<h1>profile</h1>
<div class="card" style="width: 18rem;">
   vvvvvvvvvvvvvvvv [\${this.age}] 
   <button dr-event-click="this.age = 899">zzzzzzzz</button>
   <button dr-event-click="console.log(this.age, this)">zzzzzzzz</button>
</div>
`;

@Component({
    selector: 'profile',
    template, styles
})
export class Profile {
    public age = 100;

    constructor(public testService: TestService) {
    }

    public setParent(obj: User) {
        // console.log('setParent-->!!!!!!!!!!!!!!!!!', obj)
        // setTimeout(() => {
        //     obj.name='zzzzzzz%%%%%%%%%';
        // }, 10000)
    }
}