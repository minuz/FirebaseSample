import { FirestoreCollection } from 'app/shared/models/enums';
import { TableHeader } from './models/table.models';
import { VehiclesRoutes } from './models/enums';
import * as Vehicles from './models/vehicles';

import { BikeForm } from './models/bike.form.model';
import { TruckForm } from './models/truck.form.model';
import { MotorcycleForm } from './models/motorcycle.form.model';
import { CarForm } from './models/car.form.model';

export class Guid {

    public static Empty() {
        return '00000000-0000-0000-0000-000000000000';
    }

    public static NewGuid() {
        const S4 = () => (Guid.GenerateRandom()).toString(16).substring(1);

        // then to call it, plus stitch in '4' in the third group
        return (S4() + S4() + '-' + S4() + '-4' + S4().substr(0, 3) + '-' + S4() + '-' + S4() + S4() + S4()).toLowerCase();
    }

    private static GenerateRandom() {
        // tslint:disable-next-line:no-bitwise
        return ((1 + Math.random()) * 0x10000) | 0;
    }
}

export class TableFactory {

    static GetTableHeaders(type: VehiclesRoutes): TableHeader[] {
        switch (type) {
            case VehiclesRoutes.Cars:
                return this.buildHeaders(new Vehicles.Car());
            case VehiclesRoutes.Bikes:
                return this.buildHeaders(new Vehicles.Bike());
            case VehiclesRoutes.Motorcycles:
                return this.buildHeaders(new Vehicles.Motorcycle());
            case VehiclesRoutes.Trucks:
                return this.buildHeaders(new Vehicles.Truck());
        }
    }

    private static buildHeaders(vehicle: Vehicles.IVehicle): TableHeader[] {
        const headers = new Array<TableHeader>();
        Object.keys(vehicle).map(e => {
            headers.push(new TableHeader({
                key: e,
                label: this.formatLabel(e)
            }))
        });

        return headers;
    }

    private static formatLabel(label: string) {
        const formattedLabel = label.replace(/([A-Z])/g, ' $1') // insert a space before all caps
                                    .replace(/^./, str => str.toUpperCase()); // uppercase the first character

        return formattedLabel;
    }
}

export class FormFactory {
    static GetFormModel(type: FirestoreCollection) {
        switch (type) {
            case FirestoreCollection.Cars:
                return CarForm.GetModel();
            case FirestoreCollection.Bikes:
                return BikeForm.GetModel();
            case FirestoreCollection.Motorcycles:
                return MotorcycleForm.GetModel();
            case FirestoreCollection.Trucks:
                return TruckForm.GetModel();
        }
    }
}
