import {Component, HostBinding, OnInit} from '@angular/core';

@Component({
  selector: 'da-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  @HostBinding() class = 'full-height';

  constructor() { }

  ngOnInit() {
  }

}
