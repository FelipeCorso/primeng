import {Component} from '@angular/core';
import {SelectItem} from '../../../components/common/api';

@Component({
    templateUrl: './multiselectdemo.html'
})
export class MultiSelectDemo {

    cars:SelectItem[];

    trucks:SelectItem[];

    motorcycles:SelectItem[];

    selectedCars1:string[] = [];

    selectedCars2:string[] = [];

    constructor() {
        this.cars = [
            {label: 'Audi', value: 'Audi'},
            {label: 'BMW', value: 'BMW'},
            {label: 'Fiat', value: 'Fiat'},
            {label: 'Ford', value: 'Ford'},
            {label: 'Honda', value: 'Honda'},
            {label: 'Jaguar', value: 'Jaguar'},
            {label: 'Mercedes', value: 'Mercedes'},
            {label: 'Renault', value: 'Renault'},
            {label: 'VW', value: 'VW'},
            {label: 'Volvo', value: 'Volvo'},
        ];


        this.trucks = [];
        this.addItems(this.trucks, "Truck ");
        this.motorcycles = [];
        this.addItems(this.motorcycles, "Motorcycle ");
    }

    private addItems(list:SelectItem[], label:string):void {
        for (let i = 0; i < 10; i++) {
            list.push({
                label: label + i,
                value: {
                    name: label + i,
                    id: i
                }
            });
        }
    }


}