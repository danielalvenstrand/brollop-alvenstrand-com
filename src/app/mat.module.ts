import { NgModule } from '@angular/core';
import {
  MatFormFieldModule, MatStepperModule, MatToolbarModule, MatIconModule,
  MatSelectModule, MatSnackBarModule, MatChipsModule, MatListModule, MatCardModule
} from '@angular/material';

@NgModule({
  imports: [
    MatFormFieldModule,
    MatToolbarModule,
    MatStepperModule,
    MatIconModule,
    MatSelectModule,
    MatSnackBarModule,
    MatChipsModule,
    MatListModule,
    MatCardModule
  ],
  exports: [
    MatFormFieldModule,
    MatToolbarModule,
    MatStepperModule,
    MatIconModule,
    MatSelectModule,
    MatSnackBarModule,
    MatChipsModule,
    MatListModule,
    MatCardModule
  ]
})
export class MatModule { }
