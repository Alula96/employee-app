import { Component, OnInit } from '@angular/core';

import { EmployeeModel } from '@app/models/employee.model';
import { EmployeeService } from '@app/services/employee/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  employeesList: EmployeeModel[];

  constructor(
    private employeeService: EmployeeService,
    private router: Router) { }

  ngOnInit() {
    this.loadData();
  }

  private loadData(): void {
    this.employeeService.getEmployeesList()
      .subscribe(
        (employeesList) => this.employeesList = employeesList,
        (error) => console.dir(error));
  }

  onButtonClicked(event: string, employeeSelected: EmployeeModel) {
    console.log({event});
    if (event === 'create') {
      this.employeeService.actualEmployee = null;
      this.router.navigate(['/dashboard/employee']);
    }
    if (event === 'edit') {
      this.employeeService.actualEmployee = employeeSelected;
      this.router.navigate(['/dashboard/employee']);
    }
    if (event === 'remove') {
      this.employeeService.removeEmployee(employeeSelected.id).subscribe(() => {
        this.employeesList =
          this.employeesList
            .filter((employee: EmployeeModel) => employee !== employeeSelected);
      });
    }
  }
}
