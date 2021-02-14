import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { EmployeeModel } from '@app/models/employee.model';

@Component({
  selector: 'app-employee-card',
  templateUrl: './employee-card.component.html',
  styleUrls: ['./employee-card.component.scss']
})
export class EmployeeCardComponent implements OnInit {

  @Input() employee: EmployeeModel;

  @Output() buttonClicked: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
