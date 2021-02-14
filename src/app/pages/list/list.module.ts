import { CommonModule } from '@angular/common';
import { EmployeeCardModule } from '@app/atoms/employee-card/employee-card.module';
import { ListComponent } from './list.component';
import { ListRoutingModule } from './list-routing.module';
import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared/shared.module';

@NgModule({
  declarations: [ListComponent],
  imports: [
    CommonModule,
    ListRoutingModule,
    EmployeeCardModule,
    SharedModule
  ]
})
export class ListModule { }
