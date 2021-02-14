import { MatButtonModule, MatIconModule, MatToolbarModule } from '@angular/material';

import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    // Angular material
    MatToolbarModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class DashboardModule { }
