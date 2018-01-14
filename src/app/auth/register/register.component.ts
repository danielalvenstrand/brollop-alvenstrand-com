import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'da-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  credentials = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    name: new FormControl('', [Validators.required]),
    allergies: new FormControl('', [Validators.required]),
    alcohol: new FormControl('', [Validators.required]),
    vegetarian: new FormControl('', [Validators.required]),
    message: new FormControl(''),
    password: new FormControl('', [Validators.required])
  });

  constructor(private auth: AuthService) { }

  ngOnInit() {
  }

  register(): void {
    this.auth.register(this.credentials.value).then(response => console.log(response)).catch(error => console.log(error));
  }

}
