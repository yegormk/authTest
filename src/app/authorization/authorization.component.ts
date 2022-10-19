import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { ApiBaseService } from '../services/api-base.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.css'],
})
export class AuthorizationComponent implements OnInit {
  loginForm!: FormGroup;
  hide = true;

  constructor(private auth: ApiBaseService, private router: Router) {}

  ngOnInit(): void {
    console.log('Working');
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      console.log('Auth component: ', this.loginForm.value);
      this.auth.login({ email: this.loginForm.value.email, password: this.loginForm.value.password }).subscribe(
        res => {
          console.log(res.token);
          this.router.navigate(['/userassessments']);
        },
        err => console.log(err)
      );
    }
  }
}
