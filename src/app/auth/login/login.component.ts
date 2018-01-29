import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../services/auth.service';
import {MatSnackBar} from '@angular/material';
import {Router} from '@angular/router';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'da-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  credentials = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  });

  constructor(private auth: AuthService, public snackbar: MatSnackBar, public router: Router) { }

  ngOnInit() {
  }

  login() {
    this.auth.signIn(this.credentials.value['email'], this.credentials.value['password'])
      .then(result => result && this.router.navigate(['/dashboard']))
      .catch(err => this.snackbar.open(
        err, null, {})
    );
  }

  loginGuest() {
    this.auth.signIn(environment.guest.email, environment.guest.password)
      .then(result => result && this.router.navigate(['/dashboard']))
      .catch(err => this.snackbar.open(
        err, null, {})
      );
  }

}
