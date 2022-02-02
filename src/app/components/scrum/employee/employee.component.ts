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
  employeeData: Employee[] = [];
  sameName: boolean = false;
  selectedEmpType: string = "";
  formVisible: boolean = false;
  deletePopup: boolean = false;
  currentDelete: any;
  isDisable: boolean = false;
  leavePlans: any = [];
  sprintUserStories: any = [];
  constructor() {
    this.employeeCallback = this.employeeCallback.bind(this);
    this.departmentData = JSON.parse(
      localStorage.getItem(COMMON_MSG.departments)!
    );
    this.employeeData = JSON.parse(localStorage.getItem(COMMON_MSG.employee)!);
    this.leavePlans = JSON.parse(localStorage.getItem(COMMON_MSG.leavePlans)!);
    this.sprintUserStories = JSON.parse(
      localStorage.getItem(COMMON_MSG.sprintUserStories)!
    );
    if (this.employeeData) {
      let yourNewLeaveData = [];
      let yourNewSprintData = [];
      let newEmp = false;
      for (let item of this.employeeData) {
        newEmp = true;
        if (this.leavePlans) {
          for (let leave of this.leavePlans) {
            if (item.name !== leave.name && newEmp) {
              newEmp = false;
              yourNewLeaveData.push({
                id: item.id,
                department: item.department,
                name: item.name,
                empType: item.empType,
                leaves: 0,
              });
            } else if(item.name === leave.name && newEmp){
              newEmp = false;
              yourNewLeaveData.push(leave);
            }
          }
        } else {
          yourNewLeaveData.push({
            id: item.id,
            department: item.department,
            name: item.name,
            empType: item.empType,
            leaves: 0,
          });
        }

        if (this.sprintUserStories) {
          for (let user of this.sprintUserStories) {
            if (item.name !== user.name) {
              yourNewSprintData.push({
                id: item.id,
                department: item.department,
                name: item.name,
                empType: item.empType,
                tasks: [{ task: "" }],
                status: [{ status: "" }],
                storyPoints: [{ storyPoint: "" }],
                priority: [{ priority: "" }],
              });
              return;
            } else {
              yourNewSprintData.push(user);
              return;
            }
          }
        } else {
          yourNewSprintData.push({
            id: item.id,
            department: item.department,
            name: item.name,
            empType: item.empType,
            tasks: [{ task: "" }],
            status: [{ status: "" }],
            storyPoints: [{ storyPoint: "" }],
            priority: [{ priority: "" }],
          });
        }
      }
      localStorage.setItem(
        COMMON_MSG.leavePlans,
        JSON.stringify(yourNewLeaveData)
      );
      localStorage.setItem(
        COMMON_MSG.sprintUserStories,
        JSON.stringify(yourNewSprintData)
      );
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
  empSubmit() {
    let newId = Math.floor(Math.random() * (1000000 - 100000) + 100000);
    this.submitedData = {
      id: newId,
      department: this.selectedDepartment,
      name: this.employeeName,
      empType: this.selectedEmpType,
    };
    if (this.employeeData) {
      this.employeeData.push(this.submitedData);
    } else {
      this.employeeData = [];
      this.employeeData.push(this.submitedData);
    }
    localStorage.setItem(
      COMMON_MSG.employee,
      JSON.stringify(this.employeeData)
    );
    window.location.reload();
    this.isVisible = true;
  }
  employeeCallback(event: any) {
    if (this.employeeData.length != 0) {
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

  goToDeletePopup(event: any) {
    this.deletePopup = true;
    this.currentDelete = event;
  }
  goToForm(event: any, text: string) {
    console.log(event);
    this.formVisible = true;
    if (text === "view") {
      this.selectedDepartment = event.department;
      this.employeeName = event.name;
      this.selectedEmpType = event.empType;
      this.isDisable = true;
    } else if (text === "edit") {
      this.selectedDepartment = event.department;
      this.employeeName = event.name;
      this.selectedEmpType = event.empType;
      let yourNewData = [];
      for (let i = 0; i < this.employeeData.length; i++) {
        if (this.employeeData[i].id !== event.id) {
          yourNewData.push(this.employeeData[i]);
        }
      }
      if (yourNewData) {
        this.employeeData = [];
        this.employeeData = yourNewData;
      } else {
        this.employeeData = [];
      }
    }
  }
  closeForm() {
    this.formVisible = false;
    window.location.reload();
  }
  cancelDeletePopup() {
    this.deletePopup = false;
  }
  deleteForm(event: any) {
    let yourNewData = [];
    for (let i = 0; i < this.employeeData.length; i++) {
      if (this.employeeData[i].id !== event.id) {
        yourNewData.push(this.employeeData[i]);
      }
    }
    if (yourNewData.length != 0) {
      localStorage.setItem(COMMON_MSG.employee, JSON.stringify(yourNewData));
    } else {
      localStorage.removeItem(COMMON_MSG.employee);
    }
    window.location.reload();
  }
}
