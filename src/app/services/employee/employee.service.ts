import * as moment from 'moment';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { EmployeeModel } from '@app/models/employee.model';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  readonly BASE_URL = environment.BASE_URL;

  actualEmployee: EmployeeModel;

  constructor(private http: HttpClient) { }

  getEmployeesList(): Observable<any> {
    const URLRequest = `${this.BASE_URL}/employee`;
    return this.http.get(URLRequest)
      .pipe(
        map((employeesList: []) => {
          let employees: EmployeeModel[] = [];
          if (employeesList && employeesList.length > 0) {
            employees = employeesList.map((element: any) => {
              element.birthdate = moment(element.birthdate);
              return element;
            });
          }
          return employees;
        }),
        catchError(error => {
          return throwError(error);
        })
      );
  }

  removeEmployee(id: number): Observable<any> {
    const URLRequest = `${this.BASE_URL}/employee`;
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      body: {
        id
      }
    };
    return this.http.delete(URLRequest, options);
  }
}
