import { Sim } from 'simple-boot-core/decorators/SimDecorator';
import { Component } from 'simple-boot-front/decorators/Component';
import { Inject } from 'simple-boot-core/decorators/inject/Inject';
import { Router } from 'simple-boot-core/decorators/route/Router';
import { RouterAction } from 'libs/simple-boot-core/src/route/RouterAction';


@Sim
@Component({
  template: '<h1>mypage user [name: ${this.name}$]</h1><div>good</div>',
  styles: ['div {color: red}']
})
class User {
  constructor(@Inject({disabled: true}) public name: string | undefined = 'default') {
  }

  // url() {
  //     return 'https://yt3.ggpht.com/ytc/AMLnZu8Zv9UuA3wTqAiSdmhBK3Dcvq1iuGDiHeNBa4xpMmg=s88-c-k-c0x00ffffff-no-rj-mo';
  // }

}




@Sim
@Router
({
  path: '',
  route: {
    '/': User,
  }
})
@Component({
  template: '<h1>mypage router [name: ${this.name}$]</h1><div dr-this="this.child" dr-this:type="outlet"></div>',
  styles: ['div {color: pink}']
})
export class MypageRouter implements RouterAction {
  child?: any;
  constructor(@Inject({disabled: true}) public name: string | undefined = 'default') {
  }

  async canActivate(url: any, module: any) {
    this.child = module;
    console.log('route->', url, module);
  }
  // url() {
  //     return 'https://yt3.ggpht.com/ytc/AMLnZu8Zv9UuA3wTqAiSdmhBK3Dcvq1iuGDiHeNBa4xpMmg=s88-c-k-c0x00ffffff-no-rj-mo';
  // }

}
