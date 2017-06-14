import { NgbModalOptions, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Component, OnInit } from '@angular/core';

import { VehiclesFormComponent } from 'app/shared/base.vehicle.form.component';
import { VehiclesService } from './../services/vehicles.service';

export abstract class VehicleTableComponent implements OnInit {

  abstract apiUrl: any;
  abstract vehicles$: any;

  modalOptions: NgbModalOptions;

  constructor(public modalService: NgbModal, public vehicleService: VehiclesService) {
    this.modalOptions = { size: 'lg' };
  }

  ngOnInit() {
    this.loadVehicles();
  }

  loadVehicles() {
    this.vehicles$ = this.vehicleService.Get(this.apiUrl);
  }

  addNew() {
    this.openModal(null);
  }

  editVehicle(vehicle) {
    this.openModal(vehicle);
  }

  deleteVehicle(id) {
    this.vehicleService.Delete(this.apiUrl, id)
      .subscribe(x => this.loadVehicles());
  }

  abstract openModal(vehicle);
}
