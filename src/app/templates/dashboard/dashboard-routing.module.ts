import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { NgModule } from '@angular/core';

export const routesDashboard: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'list',
        loadChildren: () => import('@app/pages/list/list.module').then(m => m.ListModule),
      },
      {
        path: 'employee',
        loadChildren: () => import('@app/pages/manage/manage.module').then(m => m.ManageModule),
      },
      { path: '', redirectTo: 'list', pathMatch: 'full' },
      { path: '**', redirectTo: 'list', pathMatch: 'full' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routesDashboard)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
