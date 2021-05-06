import {SimpleApplication} from "simple-boot-front/SimpleApplication";
import {AppRouter} from "./app/AppRouter";
import {SimOption, UrlType} from "simple-boot-front/option/SimOption";
import {SimProxyHandler} from "simple-boot-front/proxy/SimProxyHandler";
import {Renderer} from "simple-boot-front/render/Renderer";
import {Advice} from "./app/advice/Advice";

const option = new SimOption(AppRouter).setAdvice(Advice);
const simpleApplication = new SimpleApplication(option);
simpleApplication.run();

