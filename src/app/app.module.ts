import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AuthModule} from './auth/auth.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CognitoUtilService} from './services/cognito-util.service';
import {AuthService} from './services/auth.service';
import {MatModule} from './mat.module';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AuthModule,
    MatModule
  ],
  providers: [
    CognitoUtilService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
