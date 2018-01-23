import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthGuard} from '../auth.guard';
import {DashboardComponent} from './dashboard.component';
import {PhotosComponent} from './photos/photos.component';
import {InfoComponent} from './info/info.component';
import {DressCodeComponent} from './dress-code/dress-code.component';
import {LivingComponent} from './living/living.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    canLoad: [AuthGuard],
    children: [
      {path: '', pathMatch: 'full', redirectTo: '/dashboard/info'},
      {path: 'info', component: InfoComponent},
      {path: 'dress-code', component: DressCodeComponent},
      {path: 'living', component: LivingComponent},
      {path: 'photos', component: PhotosComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class DashboardRoutingModule { }
