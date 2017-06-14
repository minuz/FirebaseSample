import { ApiUrl } from './../../shared/util';
import { BikesFormComponent } from './../bikes-form/bikes-form.component';
import { VehiclesService } from './../../services/vehicles.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Bike } from './../../shared/models/vehicles';
import { Component, OnInit } from '@angular/core';
import { VehicleTableComponent } from 'app/shared/base.vehicle.table.component';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-bikes-table',
  templateUrl: './bikes-table.component.html'
})
export class BikesTableComponent extends VehicleTableComponent {
  vehicles$: FirebaseListObservable<Bike>;
  apiUrl: any;

  constructor(modalService: NgbModal, vehicleService: VehiclesService) {
    super(modalService, vehicleService);
    this.apiUrl = ApiUrl.bike;
  }

  openModal(vehicle: any) {
    const modalRef = this.modalService.open(BikesFormComponent, this.modalOptions);
    modalRef.componentInstance.vehicle = vehicle;
    modalRef.componentInstance.reloadRequest
      .subscribe(x => this.loadVehicles());
  }
}
