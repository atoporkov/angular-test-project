import HomeHttpService from "./home.service";

export default class HomeController {
    constructor(HomeHttpService) {
        this.homeHttpService = HomeHttpService;
        this.selectedTripType = null;
        this.tripTypes = [];

        this._setDefaultInputValues();

        // just for fun, does not make sence to load trip types from the server
        this.homeHttpService
            .getTripTypes()
                .then(result => this.tripTypes = result.data);
    }

    _setDefaultInputValues() {
        this.input1 = '';
        this.input2 = '';
        this.input3 = '';
        this.input4 = '';
    }

    linkedInputChanged() {
        if(this.selectedTripType && this.selectedTripType.id == 1)
            this.input3 = this.input1;
    }

    onTripTypeChanged() {
        if(!this.selectedTripType) {
            this._setDefaultInputValues();
        } else {
            this.linkedInputChanged();
        }
    }
}

HomeController.inject = ['HomeHttpService'];
