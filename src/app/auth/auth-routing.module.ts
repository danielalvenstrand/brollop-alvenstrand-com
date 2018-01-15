import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthComponent} from './auth.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {ForgotComponent} from './forgot/forgot.component';
import {PageNotFoundComponent} from '../page-not-found/page-not-found.component';
import {NotAuthGuard} from '../not-auth.guard';

const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    canActivate: [NotAuthGuard],
    children: [
      {
        path: 'signin',
        component: LoginComponent
      },
      {
        path: 'signup',
        component: RegisterComponent
      },
      {
        path: 'forgot',
        component: ForgotComponent
      }
    ]
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [NotAuthGuard]
})
export class AuthRoutingModule { }
