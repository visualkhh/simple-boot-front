import {Index} from "./features/index";
import {App} from "./layouts/App";
import {Ajax} from "./features/ajax/ajax";
import {Sim} from "simple-boot-front/decorators/SimDecorator";
import {Router} from "simple-boot-front/router/Router";
import {Intents} from './features/intent/intents';
import {Views} from "./features/view/views";
import {Exception} from "./features/exception/exception";
import {Aop} from "./features/aop/aop";

@Sim({scheme: 'layout-router'})
export class AppRouter extends Router {
    module = App;
    '' = Index;
    'ajax' = Ajax;
    'intent' = Intents;
    'view' = Views;
    'exception' = Exception;
    'aop' = Aop;
    'views' = Views;
}
