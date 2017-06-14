import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: 'layout.component.html'
})
export class LayoutComponent implements OnInit {
  menu: any;
  user: any;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.buildMenu();
    this.authService.getUserInfo()
      .subscribe(user => this.user = user);
  }

  buildMenu() {
    this.menu = [
      { text: 'Home', link: '/home' },
      { text: 'Cars', link: '/cars' },
      { text: 'Trucks', link: '/trucks' },
      { text: 'Bikes', link: '/bikes' },
      { text: 'Motorcycles', link: '/motorcycles' }
    ];
  }

  logout() {
    this.authService.logout()
      .then(response => {
        console.log(response);
        this.router.navigate(['/login']);
      });
  }
}
