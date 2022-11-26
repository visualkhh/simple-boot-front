import {Script} from 'simple-boot-front/decorators/Script';
import {Sim} from 'simple-boot-core/decorators/SimDecorator';
import {ScriptRunnable} from 'simple-boot-front/script/ScriptRunnable';
@Sim
@Script({
    name: 'concat'
})
export class ConcatScript extends ScriptRunnable {
    run(data1: string, data2: string): any {
        return data1 + ' or ' + data2;
    }
}