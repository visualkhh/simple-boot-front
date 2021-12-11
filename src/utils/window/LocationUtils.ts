export class LocationUtils {
    static hash(): string {
        return window.location.hash.replace('#', '')
    }

    static hashPath(): string {
        return '/' + window.location.hash.replace('#', '').split('?')[0]
    }

    static hashQueryParams(): Map<string, string> {
        const s = window.location.hash.replace('#', '').split('?')[1] || '';
        return this.queryStringToMap(s);
    }

    static path(): string {
        return window.location.pathname;
    }

    static pathQueryParamsObject(): { [key:string]: string } {
        return this.queryStringToObject(window.location.search.substring(1));
    }

    static pathQueryParams(): Map<string, string> {
        return this.queryStringToMap(window.location.search.substring(1));
    }

    private static queryStringToMap(s: string) {
        const params = new Map<string, string>();
        const vars = s.split('&') || [];
        vars.forEach(it => {
            const kv = it.split('=') || [];
            if (kv[0] && kv[0].length > 0) {
                params.set(kv[0], kv[1]);
            }
        })
        return params;
    }
    private static queryStringToObject(s: string): { [key:string]: string } {
        const params = {} as { [key:string]: string };
        const vars = s.split('&') || [];
        vars.forEach(it => {
            const kv = it.split('=') || [];
            if (kv[0] && kv[0].length > 0) {
                params[kv[0]] = kv[1];
            }
        })
        return params;
    }
}
