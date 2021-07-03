import {Sim} from "simple-boot-core/decorators/SimDecorator";
import {ExceptionHandler} from "simple-boot-core/decorators/exception/ExceptionDecorator";
import {After, Before} from "simple-boot-core/decorators/aop/AOPDecorator";
import {Aop} from "../features/aop/aop";
@Sim()
export class Advice {
    constructor() {
        console.log('-Advice-->?')
    }

    @ExceptionHandler()
    public exception0(e: any) {
        console.log('Advice Global exception:')
    }

    @Before({type: Aop, property: 'unkown'})
    public beforeTest(obj: any, f: Function, name: string) {
        console.log('before Test:')
    }

    @After({type: Aop, property: 'unkown'})
    public afterTest(obj: any, f: Function, name: string) {
        console.log('after Test:')
    }

}
