import { CommonModule } from '@angular/common';
import { EmployeeCardComponent } from './employee-card.component';
import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared/shared.module';

@NgModule({
  declarations: [EmployeeCardComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [EmployeeCardComponent],
})
export class EmployeeCardModule { }
