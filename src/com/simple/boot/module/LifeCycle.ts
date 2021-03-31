export interface LifeCycle {

    onInit(): void;

    onChangedRendered(): void;

    onInitedChiled(): void;

    onFinish(): void;
}
