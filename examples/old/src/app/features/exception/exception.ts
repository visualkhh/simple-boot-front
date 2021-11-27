import { ProjectService } from 'app/services/ProjectService';
import css from 'app/features/exception/exception.css';
import template from 'app/features/exception/exception.html';
import {PostConstruct, Sim} from 'simple-boot-core/decorators/SimDecorator';
import {HttpService} from 'simple-boot-front/service/HttpService';
import {View} from 'simple-boot-front/service/view/View';
import {RandomUtils} from 'simple-boot-core/utils/random/RandomUtils';
import {ExceptionHandler} from 'simple-boot-core/decorators/exception/ExceptionDecorator';
import {SimNoSuch} from 'simple-boot-core/throwable/SimNoSuch';
import {SimError} from 'simple-boot-core/throwable/SimError';
import {RouterError} from 'simple-boot-front/throwable/RouterError';
import {RouterNotFount} from 'simple-boot-front/throwable/RouterNotFount';
import { Component } from 'simple-boot-front/decorators/Component';

@Sim()
@Component({template, styles: [css]})
export class Exception {
    data = 1
    constructor(public projectService: ProjectService, public ajax: HttpService) {
    }

    onInit() {
        this.wow('44');
    }

    @PostConstruct
    post() {
        console.log('---Exception-PostConstruct-----')
    }

    wow(s: string) {
        // console.log('wow', s)
    }

    fireException($event: MouseEvent, view: View<Element>) {
        this.data = RandomUtils.random(0, 100);
        console.log('--->', this.data, this)
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
    public exceptionTypeError(e: Error, target: any, property: any, args: any) {
        console.log('11111111TypeError exception:', e, target, property, args)
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
