import {SimpleBootFront} from 'simple-boot-front/SimpleBootFront';
import {IndexRouter} from '@src/app/index.router';
import {SimFrontOption} from 'simple-boot-front/option/SimFrontOption';

const option = new SimFrontOption(window);
new SimpleBootFront(IndexRouter, option).run();