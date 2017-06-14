import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.component';
import { RouteAuthGuard } from 'app/services/route.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: '', component: LayoutComponent, canActivate: [RouteAuthGuard] , children:
    [
      { path: 'home', loadChildren: './home/home.module#HomeModule' },
      { path: 'cars', loadChildren: './cars/cars.module#CarsModule' },
      { path: 'bikes', loadChildren: './bikes/bikes.module#BikesModule' },
      { path: 'trucks', loadChildren: './trucks/trucks.module#TrucksModule' },
      { path: 'motorcycles', loadChildren: './motorcycles/motorcycles.module#MotorcyclesModule' },
      { path: '', redirectTo: 'home', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
