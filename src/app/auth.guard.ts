import { Injectable } from '@angular/core';
import {
  CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateChild, Router,
  Route
} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import {AuthService} from './services/auth.service';

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {
  constructor(private auth: AuthService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return new Promise<boolean>((resolve) => {
      this.auth.isAuthenticated()
        .then(authenticated => {
          resolve(authenticated);
        })
        .catch(() => {
          resolve(false);
          this.router.navigate(['/signin']);
        });
    });
  }

  canLoad(route: Route): Observable<boolean> | Promise<boolean> | boolean {
    return new Promise<boolean>((resolve) => {
      this.auth.isAuthenticated()
        .then(authenticated => {
          resolve(authenticated);
        })
        .catch(() => {
          resolve(false);
        });
    });
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.canActivate(route, state);
  }
}
