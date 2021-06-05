import {ProjectService} from "../../services/ProjectService";
import css from "raw-loader!./aop.css";
import html from "./aop.html";
import {PostConstruct, Sim} from "simple-boot-front/decorators/SimDecorator";
import {Module} from "simple-boot-front/module/Module";
import {AjaxService} from "simple-boot-front/service/AjaxService";
import {View} from "simple-boot-front/service/view/View";
import {RandomUtils} from "simple-boot-front/util/random/RandomUtils";
import {ExceptionHandler} from "simple-boot-front/decorators/exception/ExceptionDecorator";
import {SimNoSuch} from "simple-boot-front/throwable/SimNoSuch";
import {SimError} from "simple-boot-front/throwable/SimError";
import {RouterError} from "simple-boot-front/throwable/RouterError";
import {After, Before} from "simple-boot-front/decorators/aop/AOPDecorator";

@Sim()
export class Aop extends Module {
    styleImports = [css];
    template = html;
    data = 1
    constructor(public projectService: ProjectService, public ajax: AjaxService) {
        super("exception");
    }

    onInit() {
    }


    @PostConstruct
    post(projectService: ProjectService) {
        console.log('---apo-PostConstruct-----')
    }

    @Before({property: 'fire'})
    before(obj: any, protoType: Function) {
        console.log('before', obj, protoType)
    }

    @After({property: 'fire'})
    after(obj: any, protoType: Function) {
        console.log('after', obj, protoType)
    }

    fire($event: MouseEvent, view: View<Element>) {
        console.log('fire method')
        this.data = RandomUtils.random(0, 100);
    }

    unkown($event: MouseEvent, view: View<Element>) {
        console.log('-->', 'unkown method');
    }



    // @ExceptionHandler()
    // public exception0(e: any) {
    //     console.log('SimError exception:', e)
    // }
    @ExceptionHandler(TypeError)
    public exceptionTypeError(e: any) {
        console.log('TypeError exception:', e)
    }

    @ExceptionHandler(SimError)
    public exception1(e: any) {
        console.log('SimError exception:', e)
    }

    @ExceptionHandler(RouterError)
    public exception3(e: any) {
        console.log('NotFountRoute exception:', e)
    }

    @ExceptionHandler(SimNoSuch)
    public exception2(e: any) {
        console.log('NoSuchSim exception:', e)
    }



}