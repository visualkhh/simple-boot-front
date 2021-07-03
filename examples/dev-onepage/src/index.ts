import {SimpleBootFront} from "simple-boot-front/SimpleApplication";
import {AppRouter} from "./app/AppRouter";
import {SimFrontOption, UrlType} from "simple-boot-front/option/SimOption";
import {Advice} from "./app/advice/Advice";

const option = new SimFrontOption(AppRouter).setUrlType(UrlType.hash).setAdvice(Advice);
const simpleApplication = new SimpleBootFront(option);
simpleApplication.run();
