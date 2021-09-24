import { Sim } from 'simple-boot-core/decorators/SimDecorator';
import { Component } from 'simple-boot-front/decorators/Component';
import { FrontLifeCycle } from 'simple-boot-front/module/FrontLifeCycle';
import { TestService } from '../../services/TestService';
import { Profile } from '../../shareds/Profile';
import { RawSet } from 'dom-render/RawSet';

@Sim()
@Component({
    selector: 'user',
    template: '<div id="uu">zzzzzzzzz ${this.name} <hr dr-on-init="this.profile"> <profile dr-on-init-component="this.component" dr-set="profile.setParent(this);"></profile></div>',
    using: [Profile]
})
export class User implements FrontLifeCycle {
    public name = 'wow';
    constructor(public testService: TestService) {
    }

    onChangedRender(): void {
    }

    profile(e: Element): void {
    }

    component(obj: Profile, rawSet: RawSet): void {
        setTimeout(() => {
            obj.age = 99
        }, 5000)
    }

    onCreate(): void {
    }

    onFinish(): void {
    }

    onInit(): void {
        // alert()
    }

    onInitedChild(): void {
    }

    onInitRender(): void {
    }
}
