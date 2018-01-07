import angular from 'angular';

import { APP_CONFIG } from 'appConfig';

export default class HomeHttpService {
    constructor($http){
        this.$http = $http;
    }

    //just for fun in order to demonstrate API call, does not make sence to load trip types from the server
    // commented due to Firebase deployment. Json-server was used for local env
    //    this.homeHttpService
    //       .getTripTypes()
    //           .then(result => this.tripTypes = result.data);
    //
    getTripTypes() {
        return this.$http.get(APP_CONFIG['api']['host'] + ':' + APP_CONFIG['api']['port'] + '/tripTypes');
    }
}

HomeHttpService.inject = ['$http'];
