import angular from 'angular';
import uirouter from 'angular-ui-router';

import { routing } from 'appConfig';

import home from './views/home';

import 'normalize.css';
import './app.scss';

angular
    .module('app', [uirouter, home])
    .config(routing);
