
export class MetaDataAtomic<T = any, M = any> {
    constructor(public target: T, public metaData: M) {
    }
}
export class MetaDataPropertyAtomic<T = any, M = any> extends MetaDataAtomic<T, M> {
    constructor(target: T, metaData: M, public property: string, public parameter?: any) {
        super(target, metaData)
    }

    public call(...parameter: any) {
        (this.target as any)[this.property](...parameter);
    }
}
