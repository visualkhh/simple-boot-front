export interface LifeCycle {

    onInit(): void;

    onChangedRender(): void;

    onInitedChild(): void;

    onFinish(): void;
}
