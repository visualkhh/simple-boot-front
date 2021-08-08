import { LifeCycle } from 'simple-boot-core/cycles/LifeCycle';
// import { LifeCycle as DomLifeCycle } from 'dom-render/LifeCycle';

export interface FrontLifeCycle extends LifeCycle {
    onInit(): void;
    onChangedRender(): void;
    onInitedChild(): void;
    onFinish(): void;
}
