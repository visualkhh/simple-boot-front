import {SimpleApplication} from "simple-boot-front/SimpleApplication";
import {AppRouter} from './app/AppRouter'
import {SimstanceManager} from "simple-boot-front/simstance/SimstanceManager";

const app = SimpleApplication.run(AppRouter, {selector: 'app', urlType: 'hash'});
console.log('start: ', app)
