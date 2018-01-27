import {Component, HostBinding, OnInit} from '@angular/core';
import {UserAttributes, UserService} from '../../services/user.service';

@Component({
  selector: 'da-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {
  @HostBinding() class = 'full-height';

  attr: UserAttributes;

  coordinates = {
    skansen: {
      lat: 59.325823,
      lng: 18.105610,
      address: 'Sollidenbacken, 115 21 Stockholm',
      info: [
        'Ta spårvagn 7 eller buss 69 till hållplats Skansen.',
        'Visa bröllopsinbjudan i receptionen så får du gå in.',
        'Vigseln håller rum vid Skogaholms Trädgård i äppelallén vid lusthuset.'
      ]
    },
    clustret: {
      lat: 59.322348,
      lng: 18.074306,
      address: 'Skeppsbron 44, 111 30 Stockholm',
      info: [
        'Alla åker abonnerad buss till Clustret från Skansen.',
      ]
    }
  };

  place: 'skansen' | 'clustret';

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
