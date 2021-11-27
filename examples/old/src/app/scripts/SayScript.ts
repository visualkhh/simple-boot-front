import { Script } from 'simple-boot-front/decorators/Script';
import { ScriptRunnable } from 'simple-boot-front/script/ScriptRunnable';
import { Sim } from 'simple-boot-core/decorators/SimDecorator';

@Sim()
@Script({
    name: 'say'
})
export class SayScript extends ScriptRunnable {
    public dictionary?:{[k:string]: string}

    constructor() {
        super();
        console.log('-----sayScript')
        new Promise<{[k:string]: string}>((resolve, reject) => {
            setTimeout(function(){
                resolve({name: "Success!"}); // Yay! Everything went well!
            }, 5000);
        }).then(it => {
            this.dictionary = it;
            console.log('say-> then-->', this.dictionary)
            this.render();
        });
    }

    run(...data: any): any {
        console.log('say--->run', this.dictionary)
        return this.dictionary?.name ?? 'name';
    }

}

