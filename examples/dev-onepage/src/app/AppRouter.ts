import {Index} from './features/index';
import {App} from './layouts/App';

import { FrontRouter } from 'simple-boot-front/router/FrontRouter';
import { Sim } from 'simple-boot-core/decorators/SimDecorator';

@Sim({scheme: 'layout-router'})
export class AppRouter extends FrontRouter {
    '' = Index;
    '/' = Index;
    constructor() {
        super('', App);
    }
}
