export class ValidUtils {
    static isNullOrUndefined(data: any): boolean {
        if (data == null || undefined === data) {
            return true
        } else {
            return false
        }
    }

    static isNull(data: any): boolean {
        if (data == null) {
            return true
        } else {
            return false
        }
    }

    static isArray(object_o: any): boolean {
        if (ValidUtils.isNullOrUndefined(object_o)) {
            return false
        } else {
            return Object.prototype.toString.call(object_o).trim() === '[object Array]'
        }
    }

    static isNumber(object_o: any): boolean {
        if (ValidUtils.isNullOrUndefined(object_o)) {
            return false
        } else {
            return Object.prototype.toString.call(object_o).trim() === '[object Number]'
        }
    }

    static isString(object_o: any): boolean {
        if (ValidUtils.isNullOrUndefined(object_o)) {
            return false
        } else {
            return Object.prototype.toString.call(object_o).trim() === '[object String]'
        }
    }

    static isFunction(object_o: any): boolean {
        if (ValidUtils.isNullOrUndefined(object_o)) {
            return false
        } else {
            return Object.prototype.toString.call(object_o).trim() === '[object Function]'
        }
        // if (typeof object_o === 'function') {
        //     return true;
        // }else {
        //     return false;
        // }
    }

    static isObject(object_o: any): boolean {
        if (ValidUtils.isNullOrUndefined(object_o)) {
            return false
        } else {
            return Object.prototype.toString.call(object_o).trim() === '[object Object]'
        }
    }

    static isMap(object_o: any): boolean {
        if (ValidUtils.isNullOrUndefined(object_o)) {
            return false
        } else {
            return Object.prototype.toString.call(object_o).trim() === '[object Map]'
        }
    }
}
