import {Module} from '../module/Module'
import {Router} from './Router';
import {ConstructorType} from '../types/Types';
import {Url} from '../model/Url';

export abstract class RootRouter extends Router {
    public abstract notFound(url: Url): ConstructorType<Module>;
}