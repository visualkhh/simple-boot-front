export class FunctionUtils {
    static getParameterNames(func: Function | any, property?: string | symbol) {
        if (typeof func === 'object' && property) {
            func = func[property];
        }
        // @ts-ignore https://stackoverflow.com/questions/1007981/how-to-get-function-parameter-names-values-dynamicallyㄱ
        return new RegExp('(?:' + func.name + '\\s*|^)\\s*\\((.*?)\\)')
            .exec(func.toString().replace(/\n/g, ''))[1]
            .replace(/\/\*.*?\*\//g, '')
            .replace(/ /g, '')
            .split(',') ?? [];
    }

    static eval<T>(script: string | null, obj?: any): T | null {
        try {
            if (script && obj) {
                // eslint-disable-next-line no-new-func
                return Function(`"use strict";
                    ${script}
                    `).bind(obj)();
            } else if (script) {
                // eslint-disable-next-line no-new-func
                return (new Function('return ' + script))()
            } else {
                return null;
            }
        } catch (e) {
            return null;
        }
    }
}
