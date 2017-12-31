import { ActivatedRoute } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { Component, OnInit, EventEmitter } from '@angular/core';
import { DynamicFormService, DynamicFormControlModel } from '@ng-dynamic-forms/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { UserInfo } from 'firebase/app';

import { IVehicle } from './../../shared/models/vehicles';
import { VehiclesRoutes, FirestoreCollection } from 'app/shared/models/enums';
import { VehiclesService } from 'app/vehicles/services/vehicles.service';
import { FormFactory } from 'app/shared/util';

@Component({
    selector: 'app-vehicles-form',
    templateUrl: './vehicles-form.component.html',
    styleUrls: ['./vehicles-form.component.scss'],
    providers: [VehiclesService]
})
export class VehiclesFormComponent {

    user: UserInfo;
    collection: FirestoreCollection;
    vehicle: IVehicle;

    formModel: DynamicFormControlModel[];
    formGroup: FormGroup;

    modalTitle: string;
    ready = false;

    constructor(
        public bsModalRef: BsModalRef,
        private formService: DynamicFormService,
        private vehicleService: VehiclesService) { }

    initForm(collection: FirestoreCollection, user: UserInfo) {
        this.collection = collection;
        this.user = user;

        const formModel = FormFactory.GetFormModel(collection);
        const formGroup = this.formService.createFormGroup(formModel);

        if (this.vehicle) {
            this.modalTitle = `Edit ${this.vehicle.name}`;
            formGroup.reset(this.vehicle);
        } else {
            this.modalTitle = `New ${collection.toPascalCase()}`;
        }

        this.formModel = formModel;
        this.formGroup = formGroup;
        this.ready = true;
    }

    saveVehicle() {
        this.vehicle ? this.updateVehicle() : this.createVehicle();
        this.bsModalRef.hide();
    }

    updateVehicle() {
        const values = this.formGroup.value;
        this.vehicleService.Put(this.collection, { ...values, id: this.vehicle.id, uid: this.user.uid })
            .then(res => this.onvehicleSaved(res));
    }

    createVehicle() {
        const values = this.formGroup.value;
        this.vehicleService.Post<IVehicle>(this.collection, { ...values, uid: this.user.uid })
            .then(res => this.onvehicleSaved(res));
    }

    onvehicleSaved(response) {
        // this.reloadRequest.emit(true);
        this.vehicle = undefined;
    }
}

