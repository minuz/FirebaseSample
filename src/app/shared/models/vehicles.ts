import { Vehicle } from './vehicles';
export interface Vehicle {
    id: number;
    name: string;
    color: string;
    manufacturer: string;
}

export class Car implements Vehicle {
    id: number;
    name: string;
    color: string;
    manufacturer: string;
    passenger: number;
    bodyType: string;
    fuelType: string;
}

export class Truck implements Vehicle {
    id: number;
    name: string;
    color: string;
    manufacturer: string;
}

export class Bike implements Vehicle {
    id: number;
    name: string;
    color: string;
    manufacturer: string;
    type: string;
}

export class Motorcycle implements Vehicle {
    id: number;
    name: string;
    color: string;
    manufacturer: string;
    type: string;
}
