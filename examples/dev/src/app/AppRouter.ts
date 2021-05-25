import {Index} from "./features/index";
import {App} from "./layouts/App";
import {Ajax} from "./features/ajax/ajax";
import {Sim} from "simple-boot-front/decorators/SimDecorator";
import {Router} from "simple-boot-front/router/Router";
import {Empty} from './features/empty/empty';
import {Intents} from './features/intent/intents';
import {Views} from "./features/view/views";
import {Exception} from "./features/exception/exception";
import {Aop} from "./features/aop/aop";
import {RootRouter} from "simple-boot-front/router/RootRouter";
import {Module} from "simple-boot-front/module/Module";
import {ConstructorType} from "simple-boot-front/types/Types";
import {Navigation} from "simple-boot-front/service/Navigation";

@Sim({scheme: 'layout-router'})
export class AppRouter extends RootRouter {
    module = App;
    '' = Index;
    'ajax' = Ajax;
    'intent' = Intents;
    'view' = Views;
    'exception' = Exception;
    'aop' = Aop;
    'views' = Views;



    notFound(): ConstructorType<Module> {
        console.log(this._navigation.url)
        return Empty;
    }
}
