import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { ActionReducerMap, StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { AppRoutingModule } from './app-routing.module';
import { AuthorizationComponent } from './authorization/authorization.component';
import { AssesReportsComponent } from './asses-reports/asses-reports.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { HomePageComponent } from './home-page/home-page.component';
import { GraphComponent } from './graph/graph.component';
import { TokenInterceptor } from './services/addToken.interceptor';
import { reducers, metaReducers } from './reducers';
import { CatGalleryEffects } from './store/auth.effects';
import { login } from './store/auth.reducers';

const loginReducerMap: ActionReducerMap<any> = {
  currentUser: login,
};

@NgModule({
  declarations: [
    AppComponent,
    AuthorizationComponent,
    AssesReportsComponent,
    AdminPanelComponent,
    HomePageComponent,
    GraphComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    AppRoutingModule,
    ReactiveFormsModule,
    StoreModule.forRoot(loginReducerMap),
    StoreModule.forRoot(reducers, {
      metaReducers,
    }),
    EffectsModule.forRoot([CatGalleryEffects]),
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true}],
  bootstrap: [AppComponent],
})
export class AppModule {}
