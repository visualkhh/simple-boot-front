import { Sim } from 'simple-boot-core/decorators/SimDecorator';
import { ScriptRunnable } from 'simple-boot-front/script/ScriptRunnable';
import { Script } from 'simple-boot-front/decorators/Script';

@Sim()
@Script({
    name: 'say'
})
export class SayScript extends ScriptRunnable {

    constructor() {
        super();
        console.log('say script contructor--')
    }

    run(...data: any): any {
        console.log('scripts??????')
        return data + '!';
    }

}

