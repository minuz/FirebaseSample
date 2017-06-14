import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  credentials: FormGroup;
  errorMessage: string;
  displayError: boolean;

  constructor(private authService: AuthService, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.credentials = this.formBuilder.group({
      email: '',
      password: ''
    });
  }

  googleSignIn() {
    this.authService.loginGoogle()
      .then(response => {
        this.router.navigate(['/home']);
      });
  }

  emailSignIn() {
    let credentials = this.credentials.value;
    this.authService.loginEmail(credentials.email, credentials.password)
      .then(response => {
        console.log(response);
        this.router.navigate(['/home']);
      })
      .catch(error => {
        this.displayError = true;
        this.errorMessage = error.message;
      });
  }

}
