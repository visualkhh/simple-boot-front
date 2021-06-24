import {Module} from '../module/Module'
import {ConstructorType} from '../types/Types'
import {SimBase} from '../base/SimBase';
import {SimGlobal} from '../global/SimGlobal';
import {Navigation} from '../service/Navigation';
import {RouterModule} from './RouterModule';
import {Url} from '../model/Url';


export interface RouterModuleOption {
    module: ConstructorType<Module>;
    stripWrap?: boolean;
}

export interface Routers {
    [name: string]: RouterModuleOption | any
}

export class Router extends SimBase implements Routers {
    constructor(public path: string, public module?: RouterModuleOption, public childs: ConstructorType<Router>[] = [],
                private _simstanceManager = SimGlobal.application?.simstanceManager!,
                private _navigation = _simstanceManager.getOrNewSim(Navigation)!) {
        super()
    }

    getExecuteModule(parentRouters: Router[]): RouterModule | undefined {
        const path = this._navigation.path;
        const routerStrings = parentRouters.map(it => it.path || '')
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


    public isRootUrl(parentRoots: string[], hashUrl: string): boolean {
        return hashUrl.startsWith(parentRoots.join('') + (this.path || ''))
    }

    // my field find
    public routing(parentRoots: string[], path: string): RouterModule | undefined {
        const routers = this as Routers
        const urlRoot = parentRoots.join('') + this.path
        const regex = new RegExp('^' + urlRoot, 'i')
        path = path.replace(regex, '')
        const fieldModule = (routers[path] as RouterModuleOption)
        if (fieldModule) {
            return new RouterModule(this, this._simstanceManager.getOrNewSim(fieldModule.module), fieldModule)
        }
    }

    public async canActivate(url: Url, module: RouterModule): Promise<RouterModule | RouterModuleOption> {
        return module;
    }
}
