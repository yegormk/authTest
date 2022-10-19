import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { AssesReportsComponent } from './asses-reports/asses-reports.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { HomePageComponent } from './home-page/home-page.component';
import { GraphComponent } from './graph/graph.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/homepage',
    pathMatch: 'full',
  },
  {
    path: 'homepage',
    component: HomePageComponent,
  },
  {
    path: 'userassessments',
    component: AssesReportsComponent,
  },
  {
    path: 'users',
    component: AdminPanelComponent,
  },
  {
    path: 'graph',
    component: GraphComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
