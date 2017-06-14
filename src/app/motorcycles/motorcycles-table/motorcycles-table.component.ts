import { ApiUrl } from './../../shared/util';
import { MotorcyclesFormComponent } from './../motorcycles-form/motorcycles-form.component';
import { VehiclesService } from './../../services/vehicles.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Motorcycle } from './../../shared/models/vehicles';
import { Component, OnInit } from '@angular/core';
import { VehicleTableComponent } from 'app/shared/base.vehicle.table.component';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'motorcycles-table',
  templateUrl: './motorcycles-table.component.html'
})
export class MotorcyclesTableComponent extends VehicleTableComponent {
  vehicles$: FirebaseListObservable<Motorcycle>;
  apiUrl: any;

  constructor(modalService: NgbModal, vehicleService: VehiclesService) {
    super(modalService, vehicleService);
    this.apiUrl = ApiUrl.motorcycle;
  }

  openModal(vehicle: any) {
    const modalRef = this.modalService.open(MotorcyclesFormComponent, this.modalOptions);
    modalRef.componentInstance.vehicle = vehicle;
    modalRef.componentInstance.reloadRequest
      .subscribe(x => this.loadVehicles());
  }
}
