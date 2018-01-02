import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';

import { VehiclesRoutingModule } from './vehicles-routing.module';
import { VehiclesTableComponent } from './vehicles-table/vehicles-table.component';
import { VehiclesFormComponent } from './vehicles-form/vehicles-form.component';
import { DynamicFormsCoreModule } from '@ng-dynamic-forms/core';
import { DynamicFormsBootstrapUIModule } from '@ng-dynamic-forms/ui-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ModalModule.forRoot(),
    DynamicFormsCoreModule.forRoot(),
    DynamicFormsBootstrapUIModule,
    VehiclesRoutingModule
  ],
  declarations: [VehiclesTableComponent, VehiclesFormComponent],
  entryComponents: [VehiclesFormComponent]
})
export class VehiclesModule { }
