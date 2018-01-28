import {Component, HostBinding, OnInit, ViewChild} from '@angular/core';
import {UserAttributes, UserService} from '../services/user.service';
import {AuthService} from '../services/auth.service';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {environment} from '../../environments/environment';
import {MatSidenav} from '@angular/material';
import {routerTransition} from '../animations';

@Component({
  selector: 'da-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  animations: [routerTransition]
})
export class DashboardComponent implements OnInit {
  @HostBinding() class = 'page-component';
  under_construction = environment.under_construction;

  @ViewChild('sidenav') sidenav: MatSidenav;

  menu = [
      { link: '/dashboard/info', text: 'Information', icon: 'info' },
      { link: '/dashboard/dress-code', text: 'Dress Code', icon: 'accessibility' },
      { link: '/dashboard/living', text: 'Boende', icon: 'airline_seat_individual_suite' },
      { link: '/dashboard/photos', text: 'Bilder', icon: 'photo_camera' }
  ]

  constructor(public user: UserService, private auth: AuthService, private _router: Router, private _route: ActivatedRoute) {
    this._router.events
      .filter((event) => event instanceof NavigationEnd)
      .map(() => this._route)
      .map((route) => {
        while (route.firstChild) route = route.firstChild;
        return route;
      })
      .filter((route) => route.outlet === 'primary')
      .mergeMap((route) => route.data)
      .subscribe((event) => {
        this.sidenav && this.sidenav.close();
      });
  }

  ngOnInit() {
  }

  getState(outlet) {
    return outlet.activatedRoute.routeConfig.path;
  }

  signout() {
    this.auth.signOut()
      .then(() => this._router.navigate(['/signin']));
  }

}
