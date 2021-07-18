import css from './app.css'
import html from './app.html'
import { FrontModule } from 'simple-boot-front/module/FrontModule';
import { Sim } from 'simple-boot-core/decorators/SimDecorator';

@Sim({scheme: 'layout'})
export class App extends FrontModule {
    constructor() {
        super({template: html, styleImports: [css]});
    }
}
