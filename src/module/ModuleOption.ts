import {Module} from './Module';
import {ConstructorType} from '../types/Types';

export class ModuleOption {
    public template = '<!--%write(this.value)%-->';
    public styleImports: string[] = [];
    public modules: { [name: string]: ConstructorType<Module> } = {}
    public name = '';
}
