import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { AppRoutingModule } from './app-routing.module';
import { LoginModule } from './login/login.module';

import { AppComponent } from './app.component';

import { AuthService } from './services/auth.service';
import { VehiclesService } from './services/vehicles.service';

import { environment } from '../environments/environment';
import { LayoutComponent } from './layout/layout.component';
import { RouteAuthGuard } from 'app/services/route.guard';

import './shared/string.extensions';

@NgModule({
  declarations: [AppComponent, LayoutComponent],
  imports: [
    BrowserModule,
    HttpModule,
    AngularFireModule.initializeApp(environment.firebase, 'lucsan-sample"'),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    BsDropdownModule.forRoot(),
    AppRoutingModule,
    LoginModule
  ],
  providers: [VehiclesService, AuthService, RouteAuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
