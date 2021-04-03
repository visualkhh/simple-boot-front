import {Sim} from 'simple-boot-front/decorators/SimDecorator';
import {Module} from 'simple-boot-front/module/Module';
import css from './app.css'
import html from './app.html'

export class App extends Module {
    styleImports = [css];
    template = html;
}
Sim()(App)
