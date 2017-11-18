import { Response } from '@angular/http';
import { Component, OnInit, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { NgbActiveModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { DynamicFormControlModel, DynamicFormService } from '@ng-dynamic-forms/core';

import { VehiclesService } from '../services/vehicles.service';
import { Guid } from './util';

export abstract class VehiclesFormComponent {

    abstract apiUrl: string;
    abstract vehicle: any;
    abstract vehicleType: string;

    reloadRequest = new EventEmitter();
    formModel: DynamicFormControlModel[];
    formGroup: FormGroup;

    modalTitle: string;

    constructor(
        public activeModal: NgbActiveModal,
        public formService: DynamicFormService,
        public vehicleService: VehiclesService
    ) { }

    initForm() {
        this.formGroup = this.formService.createFormGroup(this.formModel);
        if (this.vehicle) {
            this.modalTitle = `Edit ${this.vehicle.name}`;
            this.formGroup.reset(this.vehicle);
        } else {
            this.modalTitle = `New ${this.vehicleType}`;
        }
    }

    saveVehicle() {
        this.vehicle ? this.updateVehicle() : this.createVehicle();
    }

    updateVehicle() {
        let values = this.formGroup.value;
        this.vehicleService.Put(this.apiUrl, this.vehicle.key, values)
            .subscribe(res => this.onvehicleSaved(res));
    }

    createVehicle() {
        let values = this.formGroup.value;
        this.vehicleService.Post(this.apiUrl, values)
            .subscribe(res => this.onvehicleSaved(res));
    }

    onvehicleSaved(response) {
        this.activeModal.close();
        this.reloadRequest.emit(true);
        this.vehicle = undefined;
    }
}
