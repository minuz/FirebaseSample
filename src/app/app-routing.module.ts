import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppRoutes } from './shared/models/enums';

import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.component';
import { VehiclesTableComponent } from './vehicles/vehicles-table/vehicles-table.component';

import { RouteAuthGuard } from './services/route.guard';

const routes: Routes = [
  { path: AppRoutes.Login, component: LoginComponent },
  {
    path: AppRoutes.Default, component: LayoutComponent, canActivate: [RouteAuthGuard], children:
      [
        { path: AppRoutes.Home, loadChildren: './home/home.module#HomeModule' },
        { path: AppRoutes.Vehicles, loadChildren: './vehicles/vehicles.module#VehiclesModule' },
        { path: AppRoutes.Default, redirectTo: AppRoutes.Home, pathMatch: 'full' }
      ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [RouteAuthGuard]
})
export class AppRoutingModule { }
