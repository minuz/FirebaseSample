import { BikeForm } from './bike.form.model';
import { ApiUrl } from './../../shared/util';
import { VehiclesService } from './../../services/vehicles.service';
import { DynamicFormService } from '@ng2-dynamic-forms/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Bike } from './../../shared/models/vehicles';
import { VehiclesFormComponent } from 'app/shared/base.vehicle.form.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bikes-form',
  templateUrl: './bikes-form.component.html'
})
export class BikesFormComponent extends VehiclesFormComponent implements OnInit {

  apiUrl: string;
  vehicle: Bike;
  vehicleType: string;

  constructor(activeModal: NgbActiveModal, formService: DynamicFormService, vehicleService: VehiclesService) {
    super(activeModal, formService, vehicleService);
    this.apiUrl = ApiUrl.bike;
    this.vehicleType = 'bike';
  }

  ngOnInit() {
    this.formModel = BikeForm.GetModel();
    this.initForm();
  }
}
