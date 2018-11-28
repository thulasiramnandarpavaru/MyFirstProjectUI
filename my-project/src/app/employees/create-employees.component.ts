import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Department } from '../models/department.model';
import { BsDatepickerConfig } from "ngx-bootstrap/datePicker";
import { Employee } from '../models/employee.model';


@Component({
  selector: 'app-create-employees',
  templateUrl: './create-employees.component.html',
  styleUrls: ['./create-employees.component.css']
})
export class CreateEmployeesComponent implements OnInit {
  previewPhoto = false;
  datePickerConfig: Partial<BsDatepickerConfig>;
  employee: Employee = {
    id: null,
    name: null,
    gender: null,
    email:'',
    phoneNumber: null,
    contactPreference: null,
    dateOfBirth: null,
    department: "-1",
    isActive: null,
    photoPath: null
};
  departments: Department[] = [
    { id: 1, name: 'Help Desk' },
    { id: 2, name: 'HR Team' },
    { id: 3, name: 'Java Team' },
    { id: 4, name: 'Salesforce Team' }
  ]
  constructor() { 
    this.datePickerConfig = Object.assign({}, {
      containerClass: 'theme-dark-blue',
      dateInputFormat : 'MM/DD/YYYY'
    });
  }
  togglePhotoPreview(){
    this.previewPhoto = !this.previewPhoto;
  }

  ngOnInit() {
  }
  saveEmployee(newEmployee: Employee): void {
    console.log(newEmployee);
  }
}
