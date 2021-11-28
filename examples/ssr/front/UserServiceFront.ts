import { UserService } from '../src/services/UserService';
import { Sim } from 'simple-boot-core/decorators/SimDecorator';
import { User } from '../src/services/UserService';


@Sim({
    scheme: 'UserService'
})
export class UserServiceFront implements UserService {

    constructor() {
        console.log('UserServiceFront created');
    }

    sayHello(): string {
        console.log('say front user hello')
        return 'front';
    }

    getUserData(param: User): Promise<User> {
        const headers = {
            'Content-Type': 'application/json',
            'Accept': 'intent',
            'urls': 'UserService://getUserData'
        };
        const option = {method: 'POST', headers, body: JSON.stringify(param)};
        const url = '/'
        const promise = fetch(url, option).then<User>((response) => {
            return response.json();
        });
        return promise;
    }

    /*
     async text(path: string, param = {}) {
        // const headers = {
        //     accept: 'application/vnd.simple-boot-http-ssr'
        // };
        const url = location.pathname + '?' + new URLSearchParams(Object.assign(param, {path: path, simpleboothttpssr: 'true'}));
        const option = {method: 'GET'};
        return (await fetch(url, option).then((response) => {
            // The API call was successful!
            return response.text();
        }).catch(function (err) {
            console.warn('Something went wrong.', err);
        }));
    }

    // eslint-disable-next-line no-unused-vars
    async json<T>(url: string, param = {}) {
        const headers = {
            'Content-Type': 'application/json'
        };
        url = url + '?' + new URLSearchParams({simpleboothttpssr: 'true'});
        const option = {method: 'POST', headers, body: JSON.stringify(param)};
        return (await fetch(url, option).then((response) => {
            return response.json();
        }).catch(function (err) {
            console.warn('Something went wrong.', err);
        }));
    }
     */

}
