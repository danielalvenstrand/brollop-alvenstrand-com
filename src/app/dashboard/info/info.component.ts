import {Component, HostBinding, OnInit} from '@angular/core';

@Component({
  selector: 'da-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {
  @HostBinding() class = 'full-height';

  coordinates_timeplace = {
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

  place_timeplace: 'skansen' | 'clustret';

  coordinates_living = {
    birger_jarl: {
      lat: 59.318401,
      lng: 18.083046,
      address: 'Stadsgårdskajen 156',
      label: 'M/S Birger Jarl',
      info: [
        'Nära till Clustret.',
        'Prisvärt och finns plats för många.',
        'Roligt att bo på en båt!'
      ],
      link: 'http://www.booking.com/Share-qdFR3U',
      zoom: 13
    },
    hilton: {
      lat: 59.320529,
      lng: 18.069445,
      address: 'Guldgränd 8',
      label: 'Hilton',
      info: [
        'Väldigt nära till Clustret.',
        'Välkänt med fin utsikt.',
      ],
      link: 'https://sv.hotels.com/ho202479/hilton-stockholm-slussen-stockholm-sverige/',
      zoom: 13
    },
    alvsjo: {
      lat: 59.278683,
      lng: 18.007850,
      address: 'Johan Skyttes Väg 190',
      label: 'Hotell Älvsjö',
      info: [
        'Utanför stan.',
        'Prisvärt och plats för många.',
      ],
      link: 'https://sv.hotels.com/ho224489/hotell-alvsjo-alvsjo-sverige/',
      zoom: 10
    },
    skansen: {
      lat: 59.325823,
      lng: 18.105610,
      label: 'Skansen'
    },
    clustret: {
      lat: 59.322348,
      lng: 18.074306,
      label: 'Clustret'
    }
  };

  place_living: 'birger_jarl' | 'hilton' | 'alvsjo';


  constructor() {
  }

  ngOnInit() {

  }

}
