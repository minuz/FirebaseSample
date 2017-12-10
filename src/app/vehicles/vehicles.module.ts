import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VehiclesRoutingModule } from './vehicles-routing.module';
import { VehiclesTableComponent } from './vehicles-table/vehicles-table.component';
import { VehiclesFormComponent } from './vehicles-form/vehicles-form.component';

@NgModule({
  imports: [
    CommonModule,
    VehiclesRoutingModule
  ],
  declarations: [VehiclesTableComponent, VehiclesFormComponent]
})
export class VehiclesModule { }
