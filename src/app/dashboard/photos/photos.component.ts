import {Component, HostBinding, OnInit} from '@angular/core';
import * as Instafeed from 'instafeed';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'da-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnInit {
  @HostBinding() class = 'full-height';
  tag = 'BrollopAlvenstrand';

  feed: Instafeed;

  constructor() { }

  ngOnInit() {
    this.feed = new Instafeed({
      get: 'tag',
      tagName: this.tag,
      accessToken: environment.INSTA.ACCESS_TOKEN,
    });
    this.feed.run();
  }

}
