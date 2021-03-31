import {ValidUtils} from '../valid/ValidUtils'

export class RandomUtils {
    static readonly d = ''

    static random(min?: number, max?: number) {
        if (ValidUtils.isNullOrUndefined(min)) {
            return Math.random()
        } else if (!ValidUtils.isNullOrUndefined(min) && ValidUtils.isNullOrUndefined(max)) {
            return Math.random() * (min || 0)
        } else {
            return Math.random() * ((max || 0) - (min || 0)) + (min || 0)
        }
    }

    static uuid(format: string = 'xxxx-xxxx-xxxx-xxxx'): string {
        return format.replace(/[xy]/g, function (c) {
            const r = Math.random() * 16 | 0; const v = c === 'x' ? r : (r & 0x3 | 0x8)
            return v.toString(16)
        })
    }

    static getRandomColor(): string {
        const letters = '0123456789ABCDEF'.split('')
        let color = '#'
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)]
        }
        return color
    }

    // (Math.random().toString(36)+'00000000000000000').slice(2, 10) + Date.now()
    static getRandomString(len: number): string {
        const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
        let color = ''
        for (let i = 0; i < len; i++) {
            color += letters[Math.floor(Math.random() * letters.length)]
        }
        return color
    }

    // // min (포함) 과 max (포함) 사이의 임의 정수를 반환
    // // Math.round() 를 사용하면 고르지 않은 분포를 얻게된다!
    // static getRandomIntInclusive(min: number, max: number) {
    //   return Math.floor(Math.random() * (max - min + 1)) + min;
    // }
    // // min (포함) 과 max (불포함) 사이의 임의 정수를 반환
    // // Math.round() 를 사용하면 고르지 않은 분포를 얻게된다!
    // static getRandomInt(min: number, max: number) {
    //   return Math.floor(Math.random() * (max - min)) + min;
    // }
    // // min (포함) 과 max (불포함) 사이의 난수를 반환
    // static getRandomArbitrary(min: number, max: number) {
    //   return Math.random() * (max - min) + min;
    // }
    // // 0 (포함) and 1 (불포함) 난수를 반환
    // static getRandom() {
    //   return Math.random();
    // }
}
