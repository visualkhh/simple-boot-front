import {SimpleApplication} from 'simple-boot-front/src/com/simple/boot/SimpleApplication'
import {AppRouter} from './app/AppRouter'

const app = new SimpleApplication(AppRouter).run();
console.log('start: ', app)
