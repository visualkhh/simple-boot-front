import {Sim} from 'simple-boot-core/decorators/SimDecorator';
import {ExceptionHandler} from 'simple-boot-front/decorators/exception/ExceptionDecorator';

@Sim()
export class Advice {
    @ExceptionHandler()
    public exception0(e: any) {
        console.log('Advice Global exception:', e)
    }
}
