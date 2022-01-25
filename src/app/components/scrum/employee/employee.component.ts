import { Component, OnInit } from "@angular/core";
import {
  COMMON_MSG,
  DropdownValues,
  Validation_MSG,
} from "src/app/common/messages/common-msg";
import { Department, Employee } from "src/app/models/scrum.model";

@Component({
  selector: "app-employee",
  templateUrl: "./employee.component.html",
  styleUrls: ["./employee.component.css"],
})
export class EmployeeComponent implements OnInit {
  COMMON_MSG = COMMON_MSG;
  error_Msg = Validation_MSG;
  empType = DropdownValues.empType;
  isVisible: boolean = false;
  departmentData: Department[];
  selectedDepartment: any;
  employeeName: string = "";
  submitedData: Employee = {};
  employeeArray: Employee[] = [];
  employeeData: Employee[] = [];
  sameName: boolean = false;
  selectedEmpType: string = "";
  constructor() {
    this.employeeCallback = this.employeeCallback.bind(this);
    this.departmentData = JSON.parse(
      localStorage.getItem(COMMON_MSG.departments)!
    );
    this.employeeData = JSON.parse(localStorage.getItem(COMMON_MSG.employee)!);
    if (this.employeeData) {
      for (let emp of this.employeeData) {
        this.employeeArray.push({
          id: emp.id,
          department: emp.department,
          name: emp.name,
          empType: emp.empType,
        });
      }
    }
  }

  ngOnInit(): void {}

  valueChanged(event: any, text: string) {
    if (text === COMMON_MSG.employee) {
      this.employeeName = event.value;
    } else if (text === COMMON_MSG.departments) {
      this.selectedDepartment = event.value;
    } else if (text === COMMON_MSG.empType) {
      this.selectedEmpType = event.value;
    }
  }
  empSubmit(event: any) {
    let newId = Math.floor(Math.random() * (1000000 - 100000) + 100000);
    this.submitedData = {
      id: newId,
      department: this.selectedDepartment,
      name: this.employeeName,
      empType: this.selectedEmpType,
    };
    this.employeeArray.push(this.submitedData);
    localStorage.setItem(
      COMMON_MSG.employee,
      JSON.stringify(this.employeeArray)
    );
    window.location.reload();
    this.isVisible = true;
  }
  employeeCallback(event: any) {
    if (this.employeeData) {
      for (let emp of this.employeeData) {
        if (event.value === emp.name) {
          this.sameName = false;
          break;
        } else {
          this.sameName = true;
        }
      }
      return this.sameName;
    } else {
      return true;
    }
  }
}
