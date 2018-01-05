import angular from 'angular';

import { APP_CONFIG } from 'appConfig';

export default class HomeHttpService {
    constructor($http){
        this.$http = $http;
    }

    getTripTypes() {
        return this.$http.get(APP_CONFIG['api']['host'] + ':' + APP_CONFIG['api']['port'] + '/tripTypes');
    }
}

HomeHttpService.inject = ['$http'];
