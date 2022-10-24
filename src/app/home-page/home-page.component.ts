import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { select, Store } from '@ngrx/store';
import { currentUser } from '../interfaces/responses.interfaces';
import { selectLogin } from '../store/auth.selectors';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
  constructor(public appCompMethods: AppComponent, private store: Store<currentUser>) {}

  ngOnInit(): void {}
}
