import { Vehicle } from './vehicles';
export interface Vehicle {
    key: string;
    name: string;
    color: string;
    manufacturer: string;
}

export class Car implements Vehicle {
    key: string;
    name: string;
    color: string;
    manufacturer: string;
    passenger: number;
    bodyType: string;
    fuelType: string;
}

export class Truck implements Vehicle {
    key: string;
    name: string;
    color: string;
    manufacturer: string;
}

export class Bike implements Vehicle {
    key: string;
    name: string;
    color: string;
    manufacturer: string;
    type: string;
}

export class Motorcycle implements Vehicle {
    key: string;
    name: string;
    color: string;
    manufacturer: string;
    type: string;
}
