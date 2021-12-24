import {RouterModule} from 'simple-boot-core/route/RouterModule';

export interface OnDoneRoute {
    onDoneRoute(routerModule: RouterModule, param: any): void
}
