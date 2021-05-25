import {Module} from '../module/Module'
import {ConstructorType} from '../types/Types'
import {SimBase} from '../base/SimBase';
import {SimGlobal} from '../global/SimGlobal';
import {Navigation} from '../service/Navigation';
import {RouterModule} from './RouterModule';
import {Url} from '../model/Url';

export interface Routers {
    [name: string]: ConstructorType<Module> | any
}

export class Router extends SimBase implements Routers {
    constructor(public path: string, public module?: ConstructorType<Module>, public childs: ConstructorType<Router>[] = [],
                private _simstanceManager = SimGlobal.application?.simstanceManager!,
                public _navigation = _simstanceManager.getOrNewSim(Navigation)!) {
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
            if (module) {
                return new RouterModule(this, module);
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

    get moduleObject() {
        if (this.module) {
            return SimGlobal.application?.simstanceManager.getOrNewSim(this.module)
        }
    }

    public isRootUrl(parentRoots: string[], hashUrl: string): boolean {
        return hashUrl.startsWith(parentRoots.join('') + (this.path || ''))
    }

    // my field find
    public routing(parentRoots: string[], path: string): Module | undefined {
        const routers = this as Routers
        const urlRoot = parentRoots.join('') + this.path
        const regex = new RegExp('^' + urlRoot, 'i')
        path = path.replace(regex, '')
        const fieldModule = (routers[path] as ConstructorType<any>)
        if (fieldModule) {
            return SimGlobal.application?.simstanceManager.getOrNewSim(fieldModule)
        }
    }

    public async canActivate(url: Url, module: Module): Promise<Module | ConstructorType<Module>> {
        return module;
    }
}
