import { Sim } from 'simple-boot-core/decorators/SimDecorator';

@Sim()
export class CookieService {

    get(key: string): string | undefined {
        return this.getAll()[key];
    }

    getAll(): { [k: string]: string } {
        const all: { [k: string]: string } = {};

        const strings = document.cookie.split(';') ?? [];
        strings.forEach(it => {
            const set = it.split('=');
            if (set[0] && set[1] && set[0].trim().length > 0 && set[1].trim().length > 0) {
                all[set[0].trim()] = set[1].trim();
            }
        })
        return all;
    }

    set(name: string, value: string, exp: number) {
        var date = new Date();
        date.setTime(date.getTime() + exp); // exp*24*60*60*1000
        document.cookie = name + '=' + value + ';expires=' + date.toUTCString() + ';path=/';
    }

    delete(name: string) {
        document.cookie = name + '=; expires=Thu, 01 Jan 1999 00:00:10 GMT;';
    }

}