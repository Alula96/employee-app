import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { EmployeeModel } from '@app/models/employee.model';
import { EmployeeService } from '@app/services/employee/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.scss']
})
export class ManageComponent implements OnInit {

  title = 'Crear';

  actualEmployee: EmployeeModel;

  form: FormGroup = this.fb.group({
    name: ['', [Validators.required]],
    lastName: ['', [Validators.required]],
    birthdate: ['', [Validators.required]],
    pay: [null, [Validators.required]],
  });

  constructor(
    private employeeService: EmployeeService,
    private router: Router,
    private fb: FormBuilder) { }

  ngOnInit() {
    this.actualEmployee = this.employeeService.actualEmployee;
    if (this.actualEmployee && this.actualEmployee.id) {
      this.title = 'Editar';
      this.form.addControl('id', new FormControl(this.actualEmployee.id, Validators.required));
      this.form.get('id').disable();
      this.form.get('name').setValue(this.actualEmployee.name);
      this.form.get('lastName').setValue(this.actualEmployee.lastName);
      this.form.get('birthdate').setValue(this.actualEmployee.birthdate);
      this.form.get('pay').setValue(this.actualEmployee.pay);
    }
  }

  getErrorMessage(control) {
    if (control.hasError('required')) {
      return 'Éste valor es obligatorio.';
    }
    if (control.hasError('pattern')) {
      return `Éste valor no concuerda con el patrón especificado: ${control.getError('pattern').requiredPattern}.`;
    }
  }

  returnToListPage() {
    this.router.navigate(['/dashboard/list']);
  }

  onSubmit(action) {
    if (this.form.valid) {
      switch (action) {
        case 'create':
          this.employeeService.createEmployee(this.form.value)
            .subscribe(() => {
              this.returnToListPage();
            }, (error) => { console.dir({error}); });
          break;
        case 'edit':
          this.employeeService.editEmployee({ ...this.form.value, id: this.actualEmployee.id })
            .subscribe(() => {
              this.employeeService.actualEmployee = null;
              this.returnToListPage();
            }, (error) => { console.dir({error}); });
          break;
      }
    }
  }
}
