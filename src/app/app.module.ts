import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AuthModule} from './auth/auth.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CognitoUtilService} from './services/cognito-util.service';
import {AuthService} from './services/auth.service';
import {DashboardModule} from './dashboard/dashboard.module';
import {UserService} from './services/user.service';
import {AppMatModule} from './app.mat.module';
import {PrivacyComponent} from './privacy/privacy.component';
import {environment} from '../environments/environment';
import {ServiceWorkerModule} from '@angular/service-worker';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    PrivacyComponent
  ],
  imports: [
    BrowserModule,
    environment.production ? ServiceWorkerModule.register('../ngsw-worker.js') : [],
    AppRoutingModule,
    BrowserAnimationsModule,
    AuthModule,
    DashboardModule,
    AppMatModule
  ],
  providers: [
    CognitoUtilService,
    AuthService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
