import * as moment from 'moment';

export interface EmployeeModel {
  id: number;
  name: string;
  lastName: string;
  birthdate: moment.Moment;
  pay: number;
}
