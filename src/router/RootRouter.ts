import {Module} from '../module/Module'
import {Router} from './Router';
import {ConstructorType} from '../types/Types';

export abstract class RootRouter extends Router {
    public abstract notFound(): ConstructorType<Module>;
}
