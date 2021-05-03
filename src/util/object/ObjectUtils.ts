export class ObjectUtils {
    static getAllProtoTypeName(target?: any): string[] {
        let data: string[] = [];
        if (target) {
            const proto = Object.getPrototypeOf(target);
            if (proto && (data = Object.keys(proto) || []).length > 0) {
                data = data.concat(this.getAllProtoTypeName(proto))
            }
        }
        return data;
    }
}
