import html from './index.html';
import { PostConstruct, Sim } from 'simple-boot-core/decorators/SimDecorator';
import { FrontModule } from 'simple-boot-front/module/FrontModule';
import css from './index.css'
import { User } from './User';

@Sim({scheme: 'index'})
export class Index extends FrontModule {
    public user?: User;

    constructor(user: User) {
        super({template: html, styleImports: [css], name: 'index'});
        user.init().then(it => {
            this.user = it;
        });
    }

    onInit() {
        console.log('-->')
    }

    @PostConstruct
    public g(s: User) {

    }
}
