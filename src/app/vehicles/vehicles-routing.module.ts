import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VehiclesRoutes, AppRoutes } from './../shared/models/enums';

import { VehiclesTableComponent } from './vehicles-table/vehicles-table.component';

const routes: Routes = [
  { path: VehiclesRoutes.Cars, component: VehiclesTableComponent },
  { path: VehiclesRoutes.Bikes, component: VehiclesTableComponent },
  { path: VehiclesRoutes.Trucks, component: VehiclesTableComponent },
  { path: VehiclesRoutes.Motorcycles, component: VehiclesTableComponent },
  { path: VehiclesRoutes.Default, redirectTo: VehiclesRoutes.Cars, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VehiclesRoutingModule { }
