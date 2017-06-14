import { ApiUrl } from './../../shared/util';
import { TrucksFormComponent } from './../trucks-form/trucks-form.component';
import { VehiclesService } from './../../services/vehicles.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Truck } from './../../shared/models/vehicles';
import { Component, OnInit } from '@angular/core';
import { VehicleTableComponent } from 'app/shared/base.vehicle.table.component';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-trucks-table',
  templateUrl: './Trucks-table.component.html'
})
export class TrucksTableComponent extends VehicleTableComponent {
  vehicles$: FirebaseListObservable<Truck>;
  apiUrl: any;

  constructor(modalService: NgbModal, vehicleService: VehiclesService) {
    super(modalService, vehicleService);
    this.apiUrl = ApiUrl.truck;
  }

  openModal(vehicle: any) {
    const modalRef = this.modalService.open(TrucksFormComponent, this.modalOptions);
    modalRef.componentInstance.vehicle = vehicle;
    modalRef.componentInstance.reloadRequest
      .subscribe(x => this.loadVehicles());
  }
}
