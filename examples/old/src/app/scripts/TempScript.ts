import { Script } from 'simple-boot-front/decorators/Script';
import { ScriptRunnable } from 'simple-boot-front/script/ScriptRunnable';
import { Sim } from 'simple-boot-core/decorators/SimDecorator';
import { ProjectService } from 'app/services/ProjectService';
@Script({
    name: 'temp'
})
export class TempScript extends ScriptRunnable {

    constructor(projectService: ProjectService) {
        super();
        console.log('temp script constructor', projectService)
    }

    run(...data: any): any {
        console.log('temp--->run')
    }

}

