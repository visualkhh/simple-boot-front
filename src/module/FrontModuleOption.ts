import {FrontModule} from './FrontModule';
import {ConstructorType} from 'simple-boot-core/types/Types';

export class FrontModuleOption {
    public template = '<!--%write(this.value)%-->';
    public styleImports: string[] = [];
    public modules: { [name: string]: ConstructorType<FrontModule> } = {}
}
