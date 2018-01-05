import angular from 'angular';

import { APP_CONFIG } from 'appConfig';

export default class HomeHttpService {
    constructor($http){
        this.$http = $http;
    }

    getHeader() {
        return this.$http.get(APP_CONFIG['api']['host'] + ':' + APP_CONFIG['api']['port'] + '/homeHeader');
    }
}

HomeHttpService.inject = ['$http'];
