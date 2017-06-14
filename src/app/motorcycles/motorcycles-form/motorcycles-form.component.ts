import { MotorcycleForm } from './motorcycle.form.model';
import { ApiUrl } from './../../shared/util';
import { VehiclesService } from './../../services/vehicles.service';
import { DynamicFormService } from '@ng2-dynamic-forms/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Motorcycle } from './../../shared/models/vehicles';
import { VehiclesFormComponent } from 'app/shared/base.vehicle.form.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-motorcycles-form',
  templateUrl: './motorcycles-form.component.html'
})
export class MotorcyclesFormComponent extends VehiclesFormComponent implements OnInit {

  apiUrl: string;
  vehicle: Motorcycle;
  vehicleType: string;

  constructor(activeModal: NgbActiveModal, formService: DynamicFormService, vehicleService: VehiclesService) {
    super(activeModal, formService, vehicleService);
    this.apiUrl = ApiUrl.motorcycle;
    this.vehicleType = 'motorcycle';
  }

  ngOnInit() {
    this.formModel = MotorcycleForm.GetModel();
    this.initForm();
  }
}
