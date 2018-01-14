import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'da-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.scss']
})
export class ForgotComponent implements OnInit {
  requestCredentials = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required])
  });

  confirmCredentials = new FormGroup({
    resetCode: new FormControl('', [
      Validators.pattern(/^(0|[1-9][0-9]*)$/g),
      Validators.minLength(6),
      Validators.maxLength(6),
      Validators.required]),
    newPassword: new FormControl('', [Validators.required])
  });

  constructor() { }

  ngOnInit() {
  }

  requestPasswordReset(): void {

  }

  confirmPasswordReset(): void {

  }
}
