import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatFormFieldModule, MatToolbarModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatToolbarModule
  ],
  exports: [
    MatFormFieldModule,
    MatToolbarModule
  ]
})
export class MatModule { }
