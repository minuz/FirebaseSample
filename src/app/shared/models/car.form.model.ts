import { DynamicInputModel, DynamicFormControlModel } from '@ng-dynamic-forms/core';

export class CarForm {
    static formAlign = {
        element: {
            container: 'row',
            label: 'col-form-label text-right'
        },
        grid: {
            control: 'col-sm-9',
            label: 'col-sm-3'
        }
    };

    static GetModel() {
        return [
            new DynamicInputModel({
                id: 'name',
                label: 'Name:',
                maxLength: 255,
                required: true
            }, this.formAlign),
            new DynamicInputModel({
                id: 'color',
                label: 'Color:',
                maxLength: 255
            }, this.formAlign),
            new DynamicInputModel({
                id: 'manufacturer',
                label: 'Manufacturer:',
                maxLength: 255
            }, this.formAlign),
            new DynamicInputModel({
                id: 'passenger',
                label: 'Passenger Number:',
                maxLength: 255,
                required: true
            }, this.formAlign),
            new DynamicInputModel({
                id: 'bodyType',
                label: 'Body Type:',
                maxLength: 255
            }, this.formAlign),
            new DynamicInputModel({
                id: 'fuelType',
                label: 'Fuel Type:',
                maxLength: 255
            }, this.formAlign)
        ];

    }
}
