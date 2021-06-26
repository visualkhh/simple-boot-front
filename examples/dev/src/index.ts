import {SimpleApplication} from "simple-boot-front/SimpleApplication";
import {AppRouter} from "./app/AppRouter";
import {SimOption, UrlType} from "simple-boot-front/option/SimOption";
import {Advice} from "./app/advice/Advice";

const option = new SimOption(AppRouter).setUrlType(UrlType.hash).setAdvice(Advice);
const simpleApplication = new SimpleApplication(option);
simpleApplication.run();

