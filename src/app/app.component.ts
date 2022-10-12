import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-test';
  employeeForm: FormGroup;

  value;

  constructor(
    
    private fb: FormBuilder,

  ) {
  }

  ngOnInit(): void {
    const employeeFormModel = {
      firstName: null,
    }
    let formEmployeeObj = {};
    Object.keys(employeeFormModel).forEach(key => {
      formEmployeeObj[key] = [employeeFormModel[key]];
    });

    this.employeeForm = this.fb.group(formEmployeeObj);
  }
}
