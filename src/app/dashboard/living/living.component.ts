import {Component, HostBinding, OnInit} from '@angular/core';

@Component({
  selector: 'da-living',
  templateUrl: './living.component.html',
  styleUrls: ['./living.component.scss']
})
export class LivingComponent implements OnInit {
  @HostBinding() class = 'full-height';

  constructor() { }

  ngOnInit() {
  }

}
