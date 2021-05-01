export class LocationUtils {
    static hash(): string {
        return window.location.hash.replace('#', '')
    }

    static path(): string {
        return window.location.pathname.substring(1);
    }
}
