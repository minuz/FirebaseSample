export interface IVehicle {
    id: string;
    name: string;
    color: string;
    manufacturer: string;
}

export class Car implements IVehicle {
    id: string;
    name: string;
    color: string;
    manufacturer: string;
    passenger: number;
    bodyType: string;
    fuelType: string;

    constructor() {
        // id: number;
        this.name = undefined;
        this.color = undefined;
        this.manufacturer = undefined;
        this.passenger = undefined;
        this.bodyType = undefined;
        this.fuelType = undefined;
    }
}

export class Truck implements IVehicle {
    id: string;
    name: string;
    color: string;
    manufacturer: string;

    constructor() {
        //    this.id: number;
        this.name = undefined;
        this.color = undefined;
        this.manufacturer = undefined;
    }
}

export class Bike implements IVehicle {
    id: string;
    name: string;
    color: string;
    manufacturer: string;
    type: string;

    constructor() {
        this.name = undefined;
        this.color = undefined;
        this.manufacturer = undefined;
        this.type = undefined;
    }
}

export class Motorcycle implements IVehicle {
    id: string;
    name: string;
    color: string;
    manufacturer: string;
    type: string;

    constructor() {
        this.name = undefined;
        this.color = undefined;
        this.manufacturer = undefined;
        this.type = undefined;
    }
}
