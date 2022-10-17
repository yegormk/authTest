import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { AssesReportsComponent } from './asses-reports/asses-reports.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
  {
    path: '',
    component: AppComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
})
export class AppRoutingModule {}
