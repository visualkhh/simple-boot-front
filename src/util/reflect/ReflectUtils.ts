export class ReflectUtils {
    static getParameterTypes(target: any, propertyKey?: string | symbol): any[] {
        if (propertyKey) {
            return Reflect.getMetadata('design:paramtypes', target, propertyKey) || [];
        } else {
            return Reflect.getMetadata('design:paramtypes', target) || [];
        }
    }

    static getMetadata(metadataKey: any, target: any, propertyKey?: string | symbol) {
        if (propertyKey) {
            return Reflect.getMetadata(metadataKey, target, propertyKey);
        } else {
            return Reflect.getMetadata(metadataKey, target);
        }
    }

    static metadata(metadataKey: any, data: any) {
        return Reflect.metadata(metadataKey, data);
    }

    static defineMetadata(metadataKey: any, value: any, target: any, propertyKey?: string | symbol) {
        if (propertyKey) {
            Reflect.defineMetadata(metadataKey, value, target, propertyKey);
        } else {
            Reflect.defineMetadata(metadataKey, value, target);
        }
    }
}
