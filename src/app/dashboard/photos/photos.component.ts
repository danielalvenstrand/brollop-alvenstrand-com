import {Component, HostBinding, OnInit} from '@angular/core';

@Component({
  selector: 'da-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnInit {
  @HostBinding() class = 'full-height';

  constructor() { }

  ngOnInit() {
  }

}
