import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import {DashboardRoutingModule} from './dashboard-routing.module';
import { PhotosComponent } from './photos/photos.component';
import { InfoComponent } from './info/info.component';
import { DressCodeComponent } from './dress-code/dress-code.component';
import { LivingComponent } from './living/living.component';
import {AppMatModule} from '../app.mat.module';
import {AgmCoreModule} from '@agm/core';
import {environment} from '../../environments/environment';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    AppMatModule,
    AgmCoreModule.forRoot({
      apiKey: environment.GM_API_KEY
    })
  ],
  declarations: [DashboardComponent, PhotosComponent, InfoComponent, DressCodeComponent, LivingComponent]
})
export class DashboardModule { }
