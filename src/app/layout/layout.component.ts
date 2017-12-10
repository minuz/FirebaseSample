import { AppRoutes, VehiclesRoutes } from './../shared/models/enums';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: 'layout.component.html'
})
export class LayoutComponent implements OnInit {
  home: string;
  menu: any;
  user: any;

  constructor(private authService: AuthService, private router: Router) {
    this.home = AppRoutes.Home
  }

  ngOnInit() {
    this.buildMenu();
    this.authService.getUserInfo()
      .subscribe(user => this.user = user);
  }

  buildMenu() {
    this.menu = [
      { text: AppRoutes.Home.toPascalCase(), link: `/${AppRoutes.Home}` },
      { text: VehiclesRoutes.Cars.toPascalCase(), link: `/${AppRoutes.Vehicles}/${VehiclesRoutes.Cars}` },
      { text: VehiclesRoutes.Trucks.toPascalCase(), link: `/${AppRoutes.Vehicles}/${VehiclesRoutes.Trucks}` },
      { text: VehiclesRoutes.Bikes.toPascalCase(), link: `/${AppRoutes.Vehicles}/${VehiclesRoutes.Bikes}` },
      { text: VehiclesRoutes.Motorcycles.toPascalCase(), link: `/${AppRoutes.Vehicles}/${VehiclesRoutes.Motorcycles}` }
    ];
  }

  logout() {
    this.authService.logout()
      .then(response => {
        console.log(response);
        this.router.navigate([`/${AppRoutes.Login}`]);
      });
  }
}
