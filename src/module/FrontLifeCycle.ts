import { LifeCycle } from 'simple-boot-core/cycles/LifeCycle';

export interface FrontLifeCycle extends LifeCycle {
    onInit(): void;
    onChangedRender(): void;
    onInitedChild(): void;
    onFinish(): void;
}
