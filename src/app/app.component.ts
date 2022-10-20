import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AuthorizationComponent } from './authorization/authorization.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(public form: MatDialog) {}

  ngOnInit() {
    localStorage.removeItem('todo');
    console.log(localStorage.getItem('user'));
    if (localStorage.getItem('token') === '') {
      this.openAuthForm();
    }
  }

  openAuthForm() {
    let formInfo = this.form.open(AuthorizationComponent);

    formInfo.afterClosed().subscribe(result => {
      if (result) {
        console.log(`Dialog email: ${result.email}`);
        console.log(`Dialog password: ${result.password}`);
      }
    });
  }

  isAdmin() {
    return localStorage.getItem('role') === 'Admin';
  }
}
