import { Component, OnInit } from "@angular/core";
import { COMMON_MSG, Validation_MSG } from "src/app/common/messages/common-msg";
import { LoginOptions } from "src/app/models/login.model";
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
  currentMonDate: any;
  mondayDate: any;
  tuesdayDate: any;
  wednesdayDate: any;
  thursdayDate: any;
  fridayDate: any;
  saturdayDate: any;
  sundayDate: any;
  todayDate = new Date();
  millisecondsInDay = 24 * 60 * 60 * 1000;
  loadingVisible: boolean = true;
  status: any = [];
  weekData: any = [];
  isEnableDate: any;
  loginUser: LoginOptions = {};
  constructor() {
    this.isEnableDate = new Date(this.todayDate).toLocaleDateString();
    var firstDayInWeek = this.todayDate.getDate() - this.todayDate.getDay() + 1;
    var firstDateInWeek = new Date(
      this.todayDate.setDate(firstDayInWeek)
    ).toLocaleDateString();
    this.currentMonDate = new Date(firstDateInWeek);
    this.mondayDate = new Date(
      this.currentMonDate.getTime()
    ).toLocaleDateString();
    this.tuesdayDate = new Date(
      this.currentMonDate.getTime() + this.millisecondsInDay
    ).toLocaleDateString();
    this.wednesdayDate = new Date(
      this.currentMonDate.getTime() + this.millisecondsInDay * 2
    ).toLocaleDateString();
    this.thursdayDate = new Date(
      this.currentMonDate.getTime() + this.millisecondsInDay * 3
    ).toLocaleDateString();
    this.fridayDate = new Date(
      this.currentMonDate.getTime() + this.millisecondsInDay * 4
    ).toLocaleDateString();
    this.saturdayDate = new Date(
      this.currentMonDate.getTime() + this.millisecondsInDay * 5
    ).toLocaleDateString();
    this.sundayDate = new Date(
      this.currentMonDate.getTime() + this.millisecondsInDay * 6
    ).toLocaleDateString();
    this.departmentData = JSON.parse(
      localStorage.getItem(COMMON_MSG.departments)!
    );
    this.employeeData = JSON.parse(localStorage.getItem(COMMON_MSG.employee)!);
    this.mainData = JSON.parse(localStorage.getItem(COMMON_MSG.standupStatus)!);
    this.loginUser = JSON.parse(localStorage.getItem(COMMON_MSG.user)!);
    this.dataWithDates();
  }

  ngOnInit(): void {}
  statusDisable(date: Date) {
    if (this.loginUser.email === "services@ellipseis.com") {
      if (new Date(date).getTime() <= new Date(this.isEnableDate).getTime()) {
        return false;
      } else {
        return true;
      }
    } else if (date === this.isEnableDate) {
      return false;
    } else {
      return true;
    }
  }
  onLoading() {
    setTimeout(() => {
      this.loadingVisible = false;
    }, COMMON_MSG.setTimeout5000);
  }
  nextDates() {
    this.loadingVisible = true;
    let nextDate = new Date(this.sundayDate).toLocaleDateString();
    this.currentMonDate = new Date(nextDate);
    this.mondayDate = new Date(
      this.currentMonDate.getTime() + this.millisecondsInDay
    ).toLocaleDateString();
    this.tuesdayDate = new Date(
      this.currentMonDate.getTime() + this.millisecondsInDay * 2
    ).toLocaleDateString();
    this.wednesdayDate = new Date(
      this.currentMonDate.getTime() + this.millisecondsInDay * 3
    ).toLocaleDateString();
    this.thursdayDate = new Date(
      this.currentMonDate.getTime() + this.millisecondsInDay * 4
    ).toLocaleDateString();
    this.fridayDate = new Date(
      this.currentMonDate.getTime() + this.millisecondsInDay * 5
    ).toLocaleDateString();
    this.saturdayDate = new Date(
      this.currentMonDate.getTime() + this.millisecondsInDay * 6
    ).toLocaleDateString();
    this.sundayDate = new Date(
      this.currentMonDate.getTime() + this.millisecondsInDay * 7
    ).toLocaleDateString();
    this.dataWithDates();
  }
  preDates() {
    this.loadingVisible = true;
    let backDate = new Date(this.mondayDate).toLocaleDateString();
    this.currentMonDate = new Date(backDate);
    this.mondayDate = new Date(
      this.currentMonDate.getTime() - this.millisecondsInDay * 7
    ).toLocaleDateString();
    this.tuesdayDate = new Date(
      this.currentMonDate.getTime() - this.millisecondsInDay * 6
    ).toLocaleDateString();
    this.wednesdayDate = new Date(
      this.currentMonDate.getTime() - this.millisecondsInDay * 5
    ).toLocaleDateString();
    this.thursdayDate = new Date(
      this.currentMonDate.getTime() - this.millisecondsInDay * 4
    ).toLocaleDateString();
    this.fridayDate = new Date(
      this.currentMonDate.getTime() - this.millisecondsInDay * 3
    ).toLocaleDateString();
    this.saturdayDate = new Date(
      this.currentMonDate.getTime() - this.millisecondsInDay * 2
    ).toLocaleDateString();
    this.sundayDate = new Date(
      this.currentMonDate.getTime() - this.millisecondsInDay * 1
    ).toLocaleDateString();
    this.dataWithDates();
  }
  submit() {
    this.isVisible = true;
    let oldweekData = [];
    if (this.mainData) {
      for (let week of this.mainData) {
        var start = new Date(this.mondayDate).getTime();
        var end = new Date(this.sundayDate).getTime();
        var check = new Date(week.monday.date).getTime();
        if (start <= check && end >= check) {
        } else {
          oldweekData.push(week);
        }
      }
      this.mainData = [];
      for (let week of oldweekData) {
        this.mainData.push(week);
      }
      for (let week of this.weekData) {
        this.mainData.push(week);
      }
    } else {
      for (let week of this.weekData) {
        this.mainData.push(week);
      }
    }
    localStorage.setItem(
      COMMON_MSG.standupStatus,
      JSON.stringify(this.mainData)
    );
  }
  dataWithDates() {
    if (this.mainData) {
      this.weekData = [];
      for (let week of this.mainData) {
        var start = new Date(this.mondayDate).getTime();
        var end = new Date(this.sundayDate).getTime();
        var check = new Date(week.monday.date).getTime();
        if (start <= check && end >= check) {
          this.weekData.push(week);
        }
      }
      if (this.weekData.length === 0) {
        this.newDates();
      }
    } else {
      this.mainData = [];
      this.newDates();
    }
  }
  newDates() {
    if (this.employeeData) {
      for (let emp of this.employeeData) {
        this.weekData.push({
          id: emp.id,
          name: emp.name,
          department: emp.department,
          monday: {
            date: this.mondayDate,
            value: "",
          },
          tuesday: {
            date: this.tuesdayDate,
            value: "",
          },
          wednesday: {
            date: this.wednesdayDate,
            value: "",
          },
          thursday: {
            date: this.thursdayDate,
            value: "",
          },
          friday: {
            date: this.fridayDate,
            value: "",
          },
          saturday: {
            date: this.saturdayDate,
            value: "",
          },
          sunday: {
            date: this.sundayDate,
            value: "",
          },
        });
      }
    }
  }
}
