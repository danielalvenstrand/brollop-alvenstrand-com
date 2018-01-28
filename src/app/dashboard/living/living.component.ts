import {Component, HostBinding, OnInit} from '@angular/core';

@Component({
  selector: 'da-living',
  templateUrl: './living.component.html',
  styleUrls: ['./living.component.scss']
})
export class LivingComponent implements OnInit {
  @HostBinding() class = 'full-height';

  coordinates = {
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

  place: 'birger_jarl' | 'hilton' | 'alvsjo';

  constructor() { }

  ngOnInit() {
  }

}
