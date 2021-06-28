import {Module} from '../module/Module'
import {ConstructorType} from '../types/Types'
import {SimBase} from '../base/SimBase';
import {SimGlobal} from '../global/SimGlobal';
import {Navigation} from '../service/Navigation';
import {RouterModule} from './RouterModule';
import {Url} from '../model/Url';
import {SimstanceManager} from "../simstance/SimstanceManager";

export class Router extends SimBase {
    [name: string]: ConstructorType<Module> | any;
    private _simstanceManager: SimstanceManager;
    private _navigation: Navigation;
    constructor(public path: string, public module?: ConstructorType<Module>, public childs: ConstructorType<Router>[] = []) {
        super();
        this._simstanceManager = SimGlobal.application?.simstanceManager!,
        this._navigation = this._simstanceManager.getOrNewSim(Navigation)!
    }

    // getExecuteModule(parentRouters: Router[]): RouterModule | undefined {
    //
    // }
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
        const fieldModule = (this[path] as ConstructorType<Module>)
        if (fieldModule) {
            return new RouterModule(this, this._simstanceManager.getOrNewSim(fieldModule))
        }
    }

    public async canActivate(url: Url, module: RouterModule): Promise<RouterModule | ConstructorType<Module>> {
        return module;
    }

    public notFound(url: Url): ConstructorType<Module> | undefined {
        return undefined;
    }
}
