export class FunctionUtils {
    static eval<T>(result: string): T {
        // eslint-disable-next-line no-new-func
        return (new Function('return ' + result))()
    }
}
