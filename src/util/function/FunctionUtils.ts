export class FunctionUtils {
    static eval<T>(result: string | null): T | null {
        if (result) {
            try {
                // eslint-disable-next-line no-new-func
                return (new Function('return ' + result))()
            } catch (e) {
                return null;
            }
        } else {
            return null;
        }
    }
}
