import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../services/auth.service';
import {MatHorizontalStepper, MatSnackBar} from '@angular/material';
import {Router} from '@angular/router';

@Component({
  selector: 'da-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  @Output() resize = new EventEmitter<void>();
  @ViewChild('stepper') stepper: MatHorizontalStepper;

  credentials = new FormGroup(
    {
      email: new FormControl('', [Validators.required, Validators.email]),
      name: new FormControl('', [Validators.required]),
      allergies: new FormControl(''),
      alcohol: new FormControl('', [Validators.required]),
      vegetarian: new FormControl('', [Validators.required]),
      message: new FormControl(''),
      password: new FormControl('', [Validators.required])
    }
  );

  stepGroup = new FormGroup({
    0: new FormGroup({
      name: this.credentials.controls['name'],
      allergies: this.credentials.controls['allergies'],
      alcohol: this.credentials.controls['alcohol'],
      vegetarian: this.credentials.controls['vegetarian'],
    }),
    1: new FormGroup({
      message: this.credentials.controls['message']
    }),
    2: new FormGroup({
      email: this.credentials.controls['email'],
      password: this.credentials.controls['password'],
    }),
  });

  constructor(private auth: AuthService, public snackbar: MatSnackBar, public router: Router) { }

  ngOnInit() {
    this.stepper.selectionChange.subscribe(() => this.resize.emit());
  }

  register(): void {
    const credentials = {...this.stepGroup.get([0]).value, ...this.stepGroup.get([1]).value, ...this.stepGroup.get([2]).value};
    this.auth.register(credentials)
      .then(() => {
        this.snackbar.open(
          'Ett verifieringsmail har skickats till din email! Klicka på länken i mailet för att slutföra anmälningen.',
          null, {
            duration: 5000
          });
        this.router.navigate(['signin']);
      })
      .catch(err => this.snackbar.open(
        err, null, {})
      );
  }

}
