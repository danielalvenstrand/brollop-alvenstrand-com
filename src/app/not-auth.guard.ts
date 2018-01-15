import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import {AuthService} from './services/auth.service';

@Injectable()
export class NotAuthGuard implements CanActivate {
  constructor(private router: Router, private auth: AuthService) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return new Promise<boolean>((resolve) => {
      this.auth.isAuthenticated()
        .then(() => {
          resolve(false);
          this.router.navigate(['/dashboard']);
        })
        .catch(() => {
          resolve(true);
        });
    });
  }
}
