export class FunctionUtils {
    static eval<T>(script: string | null, obj?: any): T | null {
        if (script && obj) {
            // eslint-disable-next-line no-new-func
            return Function(`"use strict";
                ${script}
                `).bind(obj)();
        } else if (script) {
            try {
                // eslint-disable-next-line no-new-func
                return (new Function('return ' + script))()
            } catch (e) {
                return null;
            }
        } else {
            return null;
        }
    }
}
