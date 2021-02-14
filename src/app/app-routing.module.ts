import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: 'dashboard',
    loadChildren: () => import('./templates/dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  { path: '', redirectTo: '/dashboard/list', pathMatch: 'full' },
  { path: '**', redirectTo: '/dashboard/list', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
