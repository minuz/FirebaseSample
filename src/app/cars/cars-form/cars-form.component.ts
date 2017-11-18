import { Response } from '@angular/http';
import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { NgbActiveModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { DynamicFormControlModel, DynamicFormService } from '@ng-dynamic-forms/core';

import { VehiclesService } from './../../services/vehicles.service';

import { Car } from './../../shared/models/vehicles';
import { ApiUrl } from './../../shared/util';
import { CarForm } from './car.form.model';
import { VehiclesFormComponent } from 'app/shared/base.vehicle.form.component';

@Component({
  selector: 'app-cars-form',
  templateUrl: './cars-form.component.html'
})
export class CarsFormComponent extends VehiclesFormComponent implements OnInit {

  @Input() vehicle: Car;
  apiUrl: string;
  vehicleType: string;

  constructor(activeModal: NgbActiveModal, formService: DynamicFormService, vehicleService: VehiclesService) {
    super(activeModal, formService, vehicleService);
  }

  ngOnInit() {
    this.apiUrl = ApiUrl.car;
    this.vehicleType = 'car';
    this.formModel = CarForm.GetModel();
    this.initForm();
  }
}
