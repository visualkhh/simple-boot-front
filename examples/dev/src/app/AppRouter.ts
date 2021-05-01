import {Index} from "./features/index";
import {App} from "./layouts/App";
import {Ajax} from "./features/ajax/ajax";
import {Sim} from "simple-boot-front/decorators/SimDecorator";
import {Router} from "simple-boot-front/module/Router";
import {Empty} from './features/empty/empty';
import {Intents} from './features/intent/intents';
import {Views} from "./features/view/views";

@Sim({scheme: 'layout-router'})
export class AppRouter extends Router {
    module = App;
    '' = Index;
    'ajax' = Ajax;
    'intent' = Intents;
    'view' = Views;
    'empty' = Empty;
}
