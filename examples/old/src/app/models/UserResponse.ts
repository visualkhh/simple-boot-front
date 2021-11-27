export interface User {
    gender: string;
    cell: string;
    name: { title: string, first: string, last: string };
    location: {
        street: {name: string, number: number}, city: string, state: string, postcode: string,
        coordinates: { latitude: string, longitude: string },
        timezone: { offset: string, description: string },
        email: string,
        login: {
            uuid: string,
            username: string,
            password: string,
            salt: string,
            md5: string,
            sha1: string,
            sha256: string
        },
        dob: {
            date: string,
            age: number
        },
        registered: {
            date: string,
            age: number
        },
        phone: string,
        cell: string,
        id: {
            name: string,
            value: string
        },
        nat: string
    };
    picture: {
        large: string,
        medium: string,
        thumbnail: string,
    };
}

export interface UserResponse {
    results: User[]
    info: {
        seed: string,
        results: number,
        page: number,
        version: string
    }
}
