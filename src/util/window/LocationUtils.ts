export class LocationUtils {
    static hash(): string {
        return window.location.hash.replace('#', '')
    }
}
