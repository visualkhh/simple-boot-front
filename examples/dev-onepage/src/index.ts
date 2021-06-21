import {SimpleApplication} from "simple-boot-front/SimpleApplication";
import {AppRouter} from "./app/AppRouter";
import {SimOption, UrlType} from "simple-boot-front/option/SimOption";
import {Advice} from "./app/advice/Advice";
import {ReflectUtils} from "simple-boot-front/util/reflect/ReflectUtils";
// import {Renderer} from "simple-boot-front/render/Renderer";
// import {ATitle} from "./app/features/index/ATitle";
// import {CTitle} from "./app/features/index/CTitle";

const option = new SimOption(AppRouter).setUrlType(UrlType.path).setAdvice(Advice);
const simpleApplication = new SimpleApplication(option);
simpleApplication.run();

// const metadata = Reflect.getMetadata("design:paramtypes", Renderer);
// console.log('--->', metadata)
// const metadata2 = Reflect.getMetadata("design:paramtypes", ATitle);
// console.log('--->', metadata2)
// const metadata3 = Reflect.getMetadata("design:paramtypes", CTitle);
// console.log('--->', metadata3)
