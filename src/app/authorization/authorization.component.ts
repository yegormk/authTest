import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiBaseService } from '../services/api-base.service';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.css'],
})
export class AuthorizationComponent implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
  });
  hide = true;

  constructor(private auth: ApiBaseService) {}

  ngOnInit(): void {
    console.log('Working');
  }

  onSubmit() {
    if (this.loginForm.valid) {
      console.log('Auth component: ', this.loginForm.value);
      this.auth.login(this.loginForm.value).subscribe(
        res => console.log(res),
        err => console.log(err),
      );
    }
  }
}
