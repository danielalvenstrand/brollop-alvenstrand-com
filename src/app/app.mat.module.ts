import { NgModule } from '@angular/core';
import {
  MatButtonModule, MatCardModule, MatChipsModule, MatDialogModule, MatExpansionModule, MatFormFieldModule, MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatSelectModule, MatSidenavModule,
  MatSnackBarModule,
  MatStepperModule, MatTabsModule,
  MatToolbarModule
} from '@angular/material';

const MATS = [
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
    MatSidenavModule,
    MatTabsModule,
    MatInputModule,
    MatButtonModule,
    MatExpansionModule,
    MatDialogModule
  ];

@NgModule({
  imports: MATS,
  exports: MATS
})
export class AppMatModule { }
