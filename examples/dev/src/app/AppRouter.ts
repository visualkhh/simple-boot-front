import { Index } from "./features/index";
import { App } from "./layouts/App";
import { Ajax } from "./features/ajax/ajax";
import {Sim} from "simple-boot-front/decorators/SimDecorator";
import {Router} from "simple-boot-front/module/Router";
import {Empty} from './features/empty/empty';

@Sim()
export class AppRouter extends Router {
    module = App;
    "" = Index;
    "ajax" = Ajax;
    "empty" = Empty;
}
