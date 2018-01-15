import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../services/auth.service';
import {MatSnackBar} from '@angular/material';
import {Router} from '@angular/router';

@Component({
  selector: 'da-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.scss']
})
export class ForgotComponent implements OnInit {
  requestCredentials = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required])
  });

  requested = false;

  confirmCredentials = new FormGroup({
    resetCode: new FormControl('', [
      Validators.pattern(/^(0|[1-9][0-9]*)$/g),
      Validators.minLength(6),
      Validators.maxLength(6),
      Validators.required]),
    newPassword: new FormControl('', [Validators.required])
  });

  constructor(private auth: AuthService, public snackbar: MatSnackBar, public router: Router) { }

  ngOnInit() {
  }

  requestPasswordReset(): void {
    this.auth.forgotSend(this.requestCredentials.value['email'])
      .then(() => {
      this.requested = true;
        this.snackbar.open(
          'Ett mail med en återställningskod har skickats till ' + this.requestCredentials.value['email'] + '. Lämna inte sidan.',
          null, {
            duration: 5000
          });
      })
      .catch(err => this.snackbar.open(
        err, null, {})
      );
  }

  confirmPasswordReset(): void {
    this.auth.forgotChange(
      this.requestCredentials.value['email'],
      this.requestCredentials.value['resetCode'],
      this.requestCredentials.value['newPassword']
    ).then(() => {
        this.requested = false;
        this.snackbar.open(
          'Ditt lösenord är nu ändrat!',
          null, {
            duration: 2000
          });
        this.router.navigate(['signin']);
      })
      .catch(err => this.snackbar.open(
        err, null, {})
      );
  }
}
