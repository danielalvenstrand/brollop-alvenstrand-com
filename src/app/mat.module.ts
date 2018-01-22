import { NgModule } from '@angular/core';
import {
  MatFormFieldModule, MatStepperModule, MatToolbarModule, MatIconModule,
  MatSelectModule, MatSnackBarModule, MatChipsModule, MatListModule, MatCardModule, MatMenuModule, MatSidenavModule
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
    MatCardModule,
    MatMenuModule,
    MatSidenavModule
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
    MatCardModule,
    MatMenuModule,
    MatSidenavModule
  ]
})
export class MatModule { }
