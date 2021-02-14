import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { NgModule } from '@angular/core';

export const routesDashboard: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routesDashboard)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
