import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AppRoutingModule } from './app-routing.module';
import { HomeModule } from './home/home.module';
import { CarsModule } from './cars/cars.module';
import { TrucksModule } from './trucks/trucks.module';
import { BikesModule } from './bikes/bikes.module';
import { MotorcyclesModule } from './motorcycles/motorcycles.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import { AuthService } from './services/auth.service';
import { VehiclesService } from './services/vehicles.service';

import { environment } from '../environments/environment';
import { LayoutComponent } from './layout/layout.component';
import { RouteAuthGuard } from 'app/services/route.guard';

const AppModules = [
  AppRoutingModule,
  HomeModule,
  CarsModule,
  TrucksModule,
  BikesModule,
  MotorcyclesModule
];

@NgModule({
  declarations: [AppComponent, LoginComponent, LayoutComponent],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AngularFireModule.initializeApp(environment.firebase, 'lucsan-sample"'),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgbModule.forRoot(),
    AppModules
  ],
  providers: [VehiclesService, AuthService, RouteAuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
