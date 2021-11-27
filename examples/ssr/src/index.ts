import { Component } from 'simple-boot-front/decorators/Component';
import { UserServiceFront } from '../front/UserServiceFront';
import { factory } from './bootfactory';
import { SimpleBootFront } from 'simple-boot-front/SimpleBootFront';
import { IndexRouter } from './routers/index.router';
import { SimFrontOption, UrlType } from 'simple-boot-front/option/SimFrontOption';

// console.log(UserServiceFront);
// const simpleBootFront = new SimpleBootFront(IndexRouter, new SimFrontOption(window).setUrlType(UrlType.path));
const simpleBootFront = factory(window, [UserServiceFront]);
simpleBootFront.run();
