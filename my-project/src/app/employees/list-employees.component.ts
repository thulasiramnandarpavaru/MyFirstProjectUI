import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee.model';

@Component({
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {
  employees:Employee[] = [
    {
      id: 10000,
      name: "Ram",
      gender: "male",
      email: "thulasiram.baron@gmail.com",
      phoneNumber: 8324546262,
      contactPreference: "email",
      dateOfBirth: new Date('06/13/1991'),
      department: "JAVA Team",
      isActive: true,
      photoPath: 'assets/Images/ram.JPG'
    },
    {
      id: 10001,
      name: "JO PAPA",
      gender: "female",
      email: "joshnabai.mude@gmaail.com",
      phoneNumber: 6127072584,
      contactPreference: "email",
      dateOfBirth: new Date('0/30/1993'),
      department: "Salesforce Team",
      isActive: true,
      photoPath: 'assets/Images/jo.JPG'
    },
    {
      id: 10002,
      name: "Rambabu",
      gender: "male",
      email: "rambabu.baron@gmail.com",
      phoneNumber: 8019256575,
      contactPreference: "phoneNumber",
      dateOfBirth: new Date('03/01/1993'),
      department: "JAVA Team",
      isActive: true,
      photoPath: 'assets/Images/rambabu.JPG'
    },
  ];
  constructor() { }

  ngOnInit() {
  }

}
