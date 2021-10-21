import { Script } from 'simple-boot-front/decorators/Script';
import { Sim } from 'simple-boot-core/decorators/SimDecorator';
import { ScriptRunnable } from 'simple-boot-front/script/ScriptRunnable';
declare const hljs: any;
@Sim({scheme: 'CodeScript'})
@Script({
    name: 'code'
})
export class CodeScript extends ScriptRunnable {
    run(data: string, language: string): any {
        console.log('data-->', data, language)
        return hljs.highlight(data, {language}).value.replace(/\$\{/g,'$<span>{</span>');
    }

}

