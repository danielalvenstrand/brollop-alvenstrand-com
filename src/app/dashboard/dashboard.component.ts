import { Component, OnInit } from '@angular/core';
import {UserAttributes, UserService} from '../services/user.service';
import {AuthService} from '../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'da-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  attr: UserAttributes;

  constructor(public user: UserService, private auth: AuthService, private router: Router) { }

  ngOnInit() {
    this.user.getAttributes().then(attr => this.attr = attr).catch(err => console.error(err));
  }

  signout() {
    this.auth.signOut()
      .then(() => this.router.navigate(['/signin']));
  }

}