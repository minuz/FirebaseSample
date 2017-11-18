import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { AngularFireList } from 'angularfire2/database';

import { VehiclesService } from './../../services/vehicles.service';

import { CarsFormComponent } from './../cars-form/cars-form.component';

import { Car } from './../../shared/models/vehicles';
import { ApiUrl } from './../../shared/util';
import { VehicleTableComponent } from 'app/shared/base.vehicle.table.component';

@Component({
  selector: 'app-cars-table',
  templateUrl: './cars-table.component.html'
})
export class CarsTableComponent extends VehicleTableComponent {
  vehicles$: AngularFireList<Car>;
  apiUrl: any;

  constructor(modalService: NgbModal, vehicleService: VehiclesService) {
    super(modalService, vehicleService);
    this.apiUrl = ApiUrl.car;
  }

  openModal(vehicle: Car) {
    const modalRef = this.modalService.open(CarsFormComponent, this.modalOptions);
    modalRef.componentInstance.vehicle = vehicle;
    modalRef.componentInstance.reloadRequest
      .subscribe(x => this.loadVehicles());
  }
}
