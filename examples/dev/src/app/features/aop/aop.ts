import {ProjectService} from '../../services/ProjectService';
import {PostConstruct, Sim} from 'simple-boot-core/decorators/SimDecorator';
import {FrontModule} from 'simple-boot-front/module/FrontModule';
import {HttpService} from 'simple-boot-front/service/HttpService';
import {View} from 'simple-boot-front/service/view/View';
import {RandomUtils} from 'simple-boot-core/utils/random/RandomUtils';
import {ExceptionHandler} from 'simple-boot-core/decorators/exception/ExceptionDecorator';
import {SimNoSuch} from 'simple-boot-core/throwable/SimNoSuch';
import {SimError} from 'simple-boot-core/throwable/SimError';
import {RouterError} from 'simple-boot-front/throwable/RouterError';
import {After, Before} from 'simple-boot-core/decorators/aop/AOPDecorator';
import css from './aop.css';
import html from './aop.html';

@Sim()
export class Aop extends FrontModule {
    data = 1

    constructor(public projectService: ProjectService, public ajax: HttpService) {
        super({template: html, styleImports: [css]});
    }

    onInit() {
    }

    @PostConstruct
    post(projectService: ProjectService) {
        console.log('---apo-PostConstruct-----')
    }

    @Before({property: 'fire'})
    before(obj: any, protoType: Function) {
        console.log('before', protoType)
    }

    @After({property: 'fire'})
    after(obj: any, protoType: Function) {
        console.log('after', protoType)
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
        console.log('TypeError exception:')
    }

    @ExceptionHandler(SimError)
    public exception1(e: any) {
        console.log('SimError exception:')
    }

    @ExceptionHandler(RouterError)
    public exception3(e: any) {
        console.log('NotFountRoute exception:')
    }

    @ExceptionHandler(SimNoSuch)
    public exception2(e: any) {
        console.log('NoSuchSim exception:')
    }
}
