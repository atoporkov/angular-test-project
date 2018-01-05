import angular from 'angular';
import uirouter from 'angular-ui-router';

import { routes } from './home.config';
import HomeController from './home.controller';
import HomeHttpService from './home.service';

import './home.template.scss';

export default angular.module('app.home', [uirouter])
  .config(routes)
  .service('HomeHttpService', HomeHttpService)
  .controller('HomeController', HomeController)
  .name;
