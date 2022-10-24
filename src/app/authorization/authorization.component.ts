import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { ApiBaseService } from '../services/api-base.service';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { currentUser } from '../interfaces/responses.interfaces';
import * as AuthActions from '../store/auth.actions';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.css'],
})
export class AuthorizationComponent implements OnInit {
  loginForm!: FormGroup;
  hide = true;

  constructor(private auth: ApiBaseService, private router: Router, private store: Store<currentUser>) {}

  ngOnInit(): void {
    console.log('Working');
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.store.dispatch(
        AuthActions.login({
          user: { email: this.loginForm.value.email, password: this.loginForm.value.password },
        }),
      );
      this.router.navigate(['']);
      // this.auth.login({ email: this.loginForm.value.email, password: this.loginForm.value.password }).subscribe(
      //   res => {
      //     console.log(res.token);
      //     this.router.navigate(['']);
      //   },
      //   err => console.log(err)
      // );
    }
  }
}
