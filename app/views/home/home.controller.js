import HomeHttpService from "./home.service";

export default class HomeController {
    constructor(HomeHttpService) {
        this.homeHttpService = HomeHttpService;
        this.selectedTripType = null;

        his._setDefaultInputValues();

        this.tripTypes = [
            {
               "id": 0,
               "name": "One-Way",
               "fields": ["input1","input2"]
            },
            {
               "id": 1,
               "name": "Round Trip",
               "fields": ["input1","input2","input3"]
            },
            {
               "id": 2,
               "name": "Multi-City",
               "fields": ["input1","input2","input3"]
            },
            {
               "id": 3,
               "name": "World-Tour",
               "fields": ["input1","input2","input3","input4"]
            }
         ];
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
