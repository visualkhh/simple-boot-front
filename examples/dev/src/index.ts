import {SimpleApplication} from "simple-boot-front/SimpleApplication";
import {AppRouter} from "./app/AppRouter";
import {UrlType} from "simple-boot-front/option/SimOption";
new SimpleApplication({selector: '#app', urlType: UrlType.path, rootRouter: AppRouter}).run();

