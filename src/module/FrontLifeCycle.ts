import { LifeCycle } from 'simple-boot-core/module/LifeCycle';

export interface FrontLifeCycle extends LifeCycle {
    onInit(): void;
    onChangedRender(): void;
    onInitedChild(): void;
    onFinish(): void;
}
