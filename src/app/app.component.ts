import { Component } from '@angular/core';
import {environment} from '../environments/environment';

@Component({
  selector: 'da-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'da';
  under_construction = environment.under_construction;
}
