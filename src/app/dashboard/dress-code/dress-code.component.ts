import {Component, HostBinding, OnInit} from '@angular/core';

@Component({
  selector: 'da-dress-code',
  templateUrl: './dress-code.component.html',
  styleUrls: ['./dress-code.component.scss']
})
export class DressCodeComponent implements OnInit {
  @HostBinding() class = 'full-height';

  constructor() { }

  ngOnInit() {
  }

}
