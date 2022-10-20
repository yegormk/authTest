import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { ApiBaseService } from '../services/api-base.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private service: ApiBaseService, private router: Router) {}

  canActivate() {
    if (this.service.isLoggedIn()) {
      return true;
    } else {
      this.router.navigate(['/home']);
      return false;
    }
  }
}
