import {FrontModule} from '../module/FrontModule'
import {ConstructorType} from 'simple-boot-core/types/Types'
import {SimGlobal} from 'simple-boot-core/global/SimGlobal';
import {Navigation} from '../service/Navigation';
import {RouterModule} from './RouterModule';
import {Url} from '../model/Url';
import {SimstanceManager} from 'simple-boot-core/simstance/SimstanceManager';
import {IntentEvent} from 'simple-boot-core/intent/IntentEvent';
import {Intent} from 'simple-boot-core/intent/Intent';

export class Router implements IntentEvent {
    [name: string]: ConstructorType<FrontModule> | any;
    private _simstanceManager: SimstanceManager;
    private _navigation: Navigation;
    constructor(public path: string, public module?: ConstructorType<FrontModule>, public childs: ConstructorType<Router>[] = []) {
        this._simstanceManager = SimGlobal().application?.simstanceManager!;
        this._navigation = this._simstanceManager.getOrNewSim(Navigation)!;
    }

    publish(intent: Intent): void {
        SimGlobal()?.application?.intentManager.onNext(intent)
    }

    subscribe(intent: Intent): void {
    }

    getExecuteModule(parentRouters: Router[]): RouterModule | undefined {
        const path = this._navigation.path;
        const routerStrings = parentRouters.slice(1).map(it => it.path || '')
        const isRoot = this.isRootUrl(routerStrings, path)
        // console.log('getExecuteModule -> ', isRoot, parentRouters, routerStrings, path, this.path);
        if (isRoot) {
            parentRouters.push(this);
            const module = this.routing(routerStrings, path)
            if (module?.module) {
                return module;
            } else {
                for (const child of this.childs) {
                    const route = this._simstanceManager.getOrNewSim(child)
                    const executeModule = route?.getExecuteModule(parentRouters)
                    if (route && executeModule) {
                        return executeModule
                    }
                }
            }
        }
    }

    public isRootUrl(parentRoots: string[], url: string): boolean {
        return url.startsWith(parentRoots.join('') + (this.path || ''))
    }

    // my field find
    public routing(parentRoots: string[], path: string): RouterModule | undefined {
        const urlRoot = parentRoots.join('') + this.path
        const regex = new RegExp('^' + urlRoot, 'i')
        path = path.replace(regex, '')
        const fieldModule = (this[path] as ConstructorType<FrontModule>)
        if (fieldModule) {
            return new RouterModule(this, this._simstanceManager.getOrNewSim(fieldModule))
        }
    }

    public async canActivate(url: Url, module: RouterModule): Promise<RouterModule | ConstructorType<FrontModule>> {
        return module;
    }

    public notFound(url: Url): ConstructorType<FrontModule> | undefined {
        return undefined;
    }
}
