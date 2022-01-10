import { Component, OnInit } from "@angular/core";
import { COMMON_MSG, Validation_MSG } from "src/app/common/messages/common-msg";
import { Department, Employee } from "src/app/models/scrum.model";

@Component({
  selector: "app-standup-status",
  templateUrl: "./standup-status.component.html",
  styleUrls: ["./standup-status.component.css"],
})
export class StandupStatusComponent implements OnInit {
  COMMON_MSG = COMMON_MSG;
  error_Msg = Validation_MSG;
  btnDisable: boolean = false;
  isVisible: boolean = false;
  employeeData: Employee[];
  departmentData: Department[];
  mainData: any = [];
  constructor() {
    this.departmentData = JSON.parse(
      localStorage.getItem(COMMON_MSG.departments)!
    );
    this.employeeData = JSON.parse(localStorage.getItem(COMMON_MSG.employee)!);
    for (let emp of this.employeeData) {
      this.mainData.push({
        id: emp.id,
        name: emp.name,
        department: emp.department,
        mon: "",
        tue: "",
        wed: "",
        thu: "",
        fri: "",
        sat: "",
        sun: "",
      });
    }
  }

  ngOnInit(): void {}

  monValueChanged(data: any) {
    console.log(data);
  }
  tueValueChanged(event: any, data: any) {
    console.log(event.value, data);
  }
  wedValueChanged(event: any, data: any) {
    console.log(event.value, data);
  }
  thuValueChanged(event: any, data: any) {
    console.log(event.value, data);
  }
  friValueChanged(event: any, data: any) {
    console.log(event.value, data);
  }
  satValueChanged(event: any, data: any) {
    console.log(event.value, data);
  }
  sunValueChanged(event: any, data: any) {
    console.log(event.value, data);
  }
  submit(data:any){
    localStorage.setItem(
      COMMON_MSG.standupStatus,
      JSON.stringify(this.mainData)
    );
  }
}
