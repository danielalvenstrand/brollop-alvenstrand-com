import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import {DashboardRoutingModule} from './dashboard-routing.module';
import { PhotosComponent } from './photos/photos.component';
import { InfoComponent } from './info/info.component';
import {AppMatModule} from '../app.mat.module';
import {AgmCoreModule} from '@agm/core';
import {environment} from '../../environments/environment';
import { ContactComponent } from './contact/contact.component';
import { AnswerComponent } from './answer/answer.component';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    AppMatModule,
    AgmCoreModule.forRoot({
      apiKey: environment.GM_API_KEY
    })
  ],
  declarations: [DashboardComponent, PhotosComponent, InfoComponent, ContactComponent, AnswerComponent]
})
export class DashboardModule { }
