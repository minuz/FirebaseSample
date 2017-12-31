import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VehiclesRoutes, AppRoutes } from './../shared/models/enums';

import { VehiclesTableComponent } from './vehicles-table/vehicles-table.component';
import { RouteResolverService } from './services/route-resolver.service';
import { VehiclesService } from './services/vehicles.service';

const routes: Routes = [
  {
    path: VehiclesRoutes.Cars,
    component: VehiclesTableComponent,
    resolve: { dto: RouteResolverService }
  },
  {
    path: VehiclesRoutes.Bikes,
    component: VehiclesTableComponent,
    resolve: { dto: RouteResolverService }
  },
  {
    path: VehiclesRoutes.Trucks,
    component: VehiclesTableComponent,
    resolve: { dto: RouteResolverService }
  },
  {
    path: VehiclesRoutes.Motorcycles,
    component: VehiclesTableComponent,
    resolve: { dto: RouteResolverService }
  },
  {
    path: VehiclesRoutes.Default,
    redirectTo: VehiclesRoutes.Cars,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [RouteResolverService]
})
export class VehiclesRoutingModule { }
