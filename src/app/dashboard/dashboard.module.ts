import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import {DashboardRoutingModule} from './dashboard-routing.module';
import {MatModule} from '../mat.module';
import { PhotosComponent } from './photos/photos.component';
import { InfoComponent } from './info/info.component';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatModule
  ],
  declarations: [DashboardComponent, PhotosComponent, InfoComponent]
})
export class DashboardModule { }
