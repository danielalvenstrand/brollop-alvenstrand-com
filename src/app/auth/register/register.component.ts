import {Component, EventEmitter, Inject, OnInit, Output, ViewChild} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../services/auth.service';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef, MatHorizontalStepper, MatSnackBar} from '@angular/material';
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
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
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

  constructor(private auth: AuthService, public snackbar: MatSnackBar, public router: Router, private dialog: MatDialog) { }

  ngOnInit() {
    this.stepper.selectionChange.subscribe(() => this.resize.emit());
  }

  register(): void {
    const credentials = {...this.stepGroup.get([0]).value, ...this.stepGroup.get([1]).value, ...this.stepGroup.get([2]).value};
    this.auth.register(credentials)
      .then(() => {
        this.snackbar.open(
          'Vi har mottagit ditt svar! Ett verifieringsmail har skickats till din email. Klicka på länken i mailet för att kunna logga in och se ditt svar.',
          null, {
            duration: 5000
          });
        this.dialog.open(RegisterConfirmedDialogComponent, {
          maxWidth: '500px',
          width: '100%',
          data: {}
        }).afterClosed().subscribe(() => this.router.navigate(['signin']));
      })
      .catch(err => {
        this.snackbar.open('Ett fel har uppstått! Försök igen eller kontakta brudparet.', null, {});
        console.error(err);
        }
      );
  }

}

@Component({
  selector: 'da-register-confirmed-dialog',
  template: `    
    <mat-dialog-content>
      <h2>tack</h2>
      <h3>Vi har mottagit ditt svar!</h3>
      <p>Ett verifieringsmail har skickats till din email. Klicka på länken i mailet för att kunna logga in och se ditt svar.</p>
    </mat-dialog-content>
    <mat-dialog-actions>
      <button mat-button [mat-dialog-close]>OK</button>
    </mat-dialog-actions>
  `,
  styles: [`
    h2, h3 {text-align: center;}
    p {font-family: 'Comfortaa', roboto, monospace;}
    mat-dialog-actions {display: flex; justify-content: center;}
  `]
})
export class RegisterConfirmedDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<RegisterConfirmedDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}

    onNoClick(): void {
      this.dialogRef.close();
    }
}
