import { TruckForm } from './truck.form.model';
import { ApiUrl } from './../../shared/util';
import { VehiclesService } from './../../services/vehicles.service';
import { DynamicFormService } from '@ng-dynamic-forms/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Truck } from './../../shared/models/vehicles';
import { VehiclesFormComponent } from 'app/shared/base.vehicle.form.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trucks-form',
  templateUrl: './trucks-form.component.html'
})
export class TrucksFormComponent extends VehiclesFormComponent implements OnInit {

  apiUrl: string;
  vehicle: Truck;
  vehicleType: string;

  constructor(activeModal: NgbActiveModal, formService: DynamicFormService, vehicleService: VehiclesService) {
    super(activeModal, formService, vehicleService);
    this.apiUrl = ApiUrl.truck;
    this.vehicleType = 'truck';
  }

  ngOnInit() {
    this.formModel = TruckForm.GetModel();
    this.initForm();
  }
}
