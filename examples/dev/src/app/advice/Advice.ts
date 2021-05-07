import {Sim} from "simple-boot-front/decorators/SimDecorator";
import {ExceptionHandler} from "simple-boot-front/decorators/exception/ExceptionDecorator";
import {After, Before} from "simple-boot-front/decorators/aop/AOPDecorator";
import {Aop} from "../features/aop/aop";
@Sim()
export class Advice {
    @ExceptionHandler()
    public exception0(e: any) {
        console.log('Advice Global exception:', e)
    }

    @Before({type: Aop, property: 'unkown'})
    public beforeTest(obj: any, f: Function, name: string) {
        console.log('before Test:', obj, f, name)
    }

    @After({type: Aop, property: 'unkown'})
    public afterTest(obj: any, f: Function, name: string) {
        console.log('after Test:', obj, f, name)
    }
}
