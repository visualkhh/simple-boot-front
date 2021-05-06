import {ConstructorType} from '../../types/Types';

export class ObjectUtils {
    static getAllProtoTypeName(target?: any): string[] {
        let data: string[] = [];
        if (target) {
            const proto = Object.getPrototypeOf(target);
            if (proto && (data = Object.keys(proto) || []).length > 0) {
                data = data.concat(this.getAllProtoTypeName(proto))
            }
        }
        return data.filter(it => it !== 'constructor');
    }

    static seal<T>(target: T): T {
        return Object.seal(target);
    }

    // static isAssignableFrom(start: ConstructorType<any>, target: ConstructorType<any>) {
    //     return this.getAllProtoType(target).includes(start);
    // }

    static isPrototypeOfTarget(start: ConstructorType<any> | null | undefined, target: any | null | undefined): boolean {
        if (start && target) {
            return Object.prototype.isPrototypeOf.call(start.prototype, target);
        } else {
            return false;
        }
    }

    static getAllProtoType(start: ConstructorType<any> | null | undefined): ConstructorType<any>[] {
        // if (typeof start === 'object') {
        //     start = Object.getPrototypeOf(start);
        // }
        const protos: ConstructorType<any>[] = []
        while (start) {
            protos.push(start);
            start = Object.getPrototypeOf(start)
        }
        return protos;
    }

    static getPrototypeOf(start: any) {
        return Object.getPrototypeOf(start);
    }
}
