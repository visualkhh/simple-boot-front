import {SimpleApplication} from "simple-boot-front/SimpleApplication";
import {Router} from "simple-boot-front/module/Router";
import {SimGlobal} from "simple-boot-front/global/SimGlobal";
import {AppRouter} from "./app/AppRouter";
import {UrlType} from "simple-boot-front/option/SimOption";
let app = new SimpleApplication({selector: 'app', urlType: UrlType.hash}).run(AppRouter);

