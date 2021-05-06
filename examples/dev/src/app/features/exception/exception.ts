import { UserResponse } from "../../models/UserResponse";
import { Profile } from "../../shareds/Profile";
import { ProjectService } from "../../services/ProjectService";
import css from "./exception.css";
import html from "./exception.html";
import {PostConstruct, Sim} from "simple-boot-front/decorators/SimDecorator";
import {Module} from "simple-boot-front/module/Module";
import {AjaxService} from "simple-boot-front/service/AjaxService";
import {View} from "simple-boot-front/service/view/View";
import {RandomUtils} from "simple-boot-front/util/random/RandomUtils";
import {ExceptionHandler} from "simple-boot-front/decorators/exception/ExceptionDecorator";
import {SimNoSuch} from "simple-boot-front/throwable/SimNoSuch";
import {SimError} from "simple-boot-front/throwable/SimError";
import {RouterError} from "simple-boot-front/throwable/RouterError";
import {RouterNotFount} from "simple-boot-front/throwable/RouterNotFount";

@Sim()
export class Exception extends Module {
    styleImports = [css];
    template = html;
    data = 1
    constructor(public projectService: ProjectService, public ajax: AjaxService) {
        super("exception");
    }

    onInit() {
        this.wow('44');
    }


    @PostConstruct
    post() {
        console.log('---Exception-PostConstruct-----')
    }

    wow(s: string) {
        console.log('wow', s)
    }

    fireException($event: MouseEvent, view: View<Element>) {
        this.data = RandomUtils.random(0, 100);
        console.log('--->', this.data)
        this.wow('aaaa');
        const a = undefined;
        console.log((a as any).wow)
        // const number = 5/0;
        // console.log('-->', number, $event, view);
    }

    unkownException($event: MouseEvent, view: View<Element>) {
        throw undefined;
        // const number = 5/0;
        // console.log('-->', number, $event, view);
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
