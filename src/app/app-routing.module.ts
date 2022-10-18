import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { AssesReportsComponent } from './asses-reports/asses-reports.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/userassessments',
    pathMatch: 'full',
  },
  {
    path: 'userassessments',
    component: AssesReportsComponent,
  },
  {
    path: 'users',
    component: AdminPanelComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
