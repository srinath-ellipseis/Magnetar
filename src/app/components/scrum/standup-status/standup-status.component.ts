import { formatDate } from "@angular/common";
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
  millisecondsInDay = 24 * 60 * 60 * 1000;
  todayDate = new Date("1/10/2022");
  mondayDate = new Date(this.todayDate.getTime()).toLocaleDateString();
  tuesdayDate = new Date(
    this.todayDate.getTime() + this.millisecondsInDay
  ).toLocaleDateString();
  wednesdayDate = new Date(
    this.todayDate.getTime() + this.millisecondsInDay * 2
  ).toLocaleDateString();
  thursdayDate = new Date(
    this.todayDate.getTime() + this.millisecondsInDay * 3
  ).toLocaleDateString();
  fridayDate = new Date(
    this.todayDate.getTime() + this.millisecondsInDay * 4
  ).toLocaleDateString();
  saturdayDate = new Date(
    this.todayDate.getTime() + this.millisecondsInDay * 5
  ).toLocaleDateString();
  sundayDate = new Date(
    this.todayDate.getTime() + this.millisecondsInDay * 6
  ).toLocaleDateString();
  loadingVisible: boolean = true;
  constructor() {
    this.departmentData = JSON.parse(
      localStorage.getItem(COMMON_MSG.departments)!
    );
    this.employeeData = JSON.parse(localStorage.getItem(COMMON_MSG.employee)!);
    this.mainData = JSON.parse(localStorage.getItem(COMMON_MSG.standupStatus)!);
    if (!this.mainData) {
      this.mainData = [];
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
  }

  ngOnInit(): void {}
  onLoading() {
    setTimeout(() => {
      this.loadingVisible = false;
    }, COMMON_MSG.setTimeout5000);
  }
  nextDates() {
    this.loadingVisible = true;
    let nextDate = new Date(this.sundayDate).toLocaleDateString();
    this.todayDate = new Date(nextDate);
    this.mondayDate = new Date(
      this.todayDate.getTime() + this.millisecondsInDay
    ).toLocaleDateString();
    this.tuesdayDate = new Date(
      this.todayDate.getTime() + this.millisecondsInDay * 2
    ).toLocaleDateString();
    this.wednesdayDate = new Date(
      this.todayDate.getTime() + this.millisecondsInDay * 3
    ).toLocaleDateString();
    this.thursdayDate = new Date(
      this.todayDate.getTime() + this.millisecondsInDay * 4
    ).toLocaleDateString();
    this.fridayDate = new Date(
      this.todayDate.getTime() + this.millisecondsInDay * 5
    ).toLocaleDateString();
    this.saturdayDate = new Date(
      this.todayDate.getTime() + this.millisecondsInDay * 6
    ).toLocaleDateString();
    this.sundayDate = new Date(
      this.todayDate.getTime() + this.millisecondsInDay * 7
    ).toLocaleDateString();
  }
  preDates() {
    this.loadingVisible = true;
    let backDate = new Date(this.mondayDate).toLocaleDateString();
    this.todayDate = new Date(backDate);
    this.mondayDate = new Date(
      this.todayDate.getTime() - this.millisecondsInDay * 7
    ).toLocaleDateString();
    this.tuesdayDate = new Date(
      this.todayDate.getTime() - this.millisecondsInDay * 6
    ).toLocaleDateString();
    this.wednesdayDate = new Date(
      this.todayDate.getTime() - this.millisecondsInDay * 5
    ).toLocaleDateString();
    this.thursdayDate = new Date(
      this.todayDate.getTime() - this.millisecondsInDay * 4
    ).toLocaleDateString();
    this.fridayDate = new Date(
      this.todayDate.getTime() - this.millisecondsInDay * 3
    ).toLocaleDateString();
    this.saturdayDate = new Date(
      this.todayDate.getTime() - this.millisecondsInDay * 2
    ).toLocaleDateString();
    this.sundayDate = new Date(
      this.todayDate.getTime() - this.millisecondsInDay * 1
    ).toLocaleDateString();
  }
  monValueChanged(data: any) {}
  tueValueChanged(event: any, data: any) {}
  wedValueChanged(event: any, data: any) {}
  thuValueChanged(event: any, data: any) {}
  friValueChanged(event: any, data: any) {}
  satValueChanged(event: any, data: any) {}
  sunValueChanged(event: any, data: any) {}
  submit(data: any) {
    localStorage.setItem(
      COMMON_MSG.standupStatus,
      JSON.stringify(this.mainData)
    );
  }
}
