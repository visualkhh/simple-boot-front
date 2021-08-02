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

    static pathQueryParams(): Map<string, string> {
        return this.queryStringToMap(window.location.search.substring(1));
    }

    private static queryStringToMap(s: string) {
        const params = new Map<string, string>();
        const vars = s.split('&') || [];
        vars.forEach(it => {
            const kv = it.split('=') || [];
            params.set(kv[0], kv[1]);
        })
        return params;
    }
}
