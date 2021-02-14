import { Component, OnInit } from '@angular/core';

import { EmployeeModel } from '@app/models/employee.model';
import { EmployeeService } from '@app/services/employee/employee.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  employeesList: EmployeeModel[];

  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    this.loadData();
  }

  private loadData(): void {
    this.employeeService.getEmployeesList()
      .subscribe(
        (employeesList) => this.employeesList = employeesList,
        (error) => console.dir(error));
  }

  onButtonClicked(event: string, employee: EmployeeModel) {
    if (event === 'edit') {

    }
    
    if (event === 'remove') {

    }
  }
}
