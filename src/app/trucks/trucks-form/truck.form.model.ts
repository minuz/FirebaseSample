import { DynamicInputModel, DynamicFormControlModel } from '@ng2-dynamic-forms/core';

export class TruckForm {
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
            }, this.formAlign)
        ];

    }
}
