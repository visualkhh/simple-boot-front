import {SimpleApplication} from "simple-boot-front/SimpleApplication";
import {AppRouter} from "./app/AppRouter";
import {SimOption, UrlType} from "simple-boot-front/option/SimOption";
import {Advice} from "./app/advice/Advice";
import {ReflectUtils} from "simple-boot-front/util/reflect/ReflectUtils";
import {CTitle} from "../../../test/reflect/reflect.test";

const option = new SimOption(AppRouter).setUrlType(UrlType.path).setAdvice(Advice);
const simpleApplication = new SimpleApplication(option);
simpleApplication.run();

