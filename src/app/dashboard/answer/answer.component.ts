import {Component, HostBinding, OnInit} from '@angular/core';
import {UserAttributes, UserService} from '../../services/user.service';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'da-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.scss']
})
export class AnswerComponent implements OnInit {
  @HostBinding() class = 'full-height';

  attr: UserAttributes;
  guestEmail = environment.guest.email;

  constructor(public user: UserService) {
    this.attr = {
      name: 'Laddar...',
      email: 'Laddar...',
      vegetarian: 'Laddar...',
      alcohol: 'Laddar...',
      allergies: 'Laddar...',
      message: 'Laddar...'
    }
  }

  ngOnInit() {
    this.user.getAttributes().then(attr => this.attr = attr).catch(err => console.error(err));
  }

}
