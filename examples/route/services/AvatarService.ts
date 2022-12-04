import {Sim} from 'simple-boot-core/decorators/SimDecorator';

// randomuser.me result type
export type Profile = {
    gender: string;
    name: {
        title: string;
        first: string;
        last: string;
    }
    email: string;
    picture: {
        large: string;
        medium: string;
        thumbnail: string;
    }
    login: {
        uuid: string;
        username: string;
        slat: string;
        md5: string;
        sha256: string;
    }
}
@Sim
export class AvatarService {
    private sprites = [
        'adventurer', 'adventurer-neutral', 'avataaars', 'big-ears', 'big-ears-neutral',
        'big-smile', 'bottts', 'croodles', 'croodles-neutral', 'identicon', 'initials',
        'micah', 'miniavs', 'open-peeps', 'personas', 'pixel-art', 'pixel-art-neutral'
    ]

    randomAvatarUrl() {
        return `https://avatars.dicebear.com/api/${this.sprites[Math.floor(Math.random() * this.sprites.length)]}/${Math.random()}.svg`;
    }

    randomAvatarUrls(count: number) {
        return Array.from({length: count}, () => this.randomAvatarUrl());
    }

    randomProfile() {
        return this.randomProfiles().then(it => it.results[0]);
    }

    randomProfiles(results?: number) {
        const url = new URL('/api/', 'https://randomuser.me');
        if (results) {
            url.searchParams.append('results', results.toString());
        }
        return fetch(url).then(it => it.json() as Promise<{ results: Profile[] }>);
    }
}