import { Component, OnInit } from "@angular/core";
import { COMMON_MSG, Validation_MSG } from "src/app/common/messages/common-msg";
import { LoginOptions } from "src/app/models/login.model";
import { Department, Employee } from "src/app/models/scrum.model";

@Component({
  selector: "app-attendance",
  templateUrl: "./attendance.component.html",
  styleUrls: ["./attendance.component.css"],
})
export class AttendanceComponent implements OnInit {
  COMMON_MSG = COMMON_MSG;
  error_Msg = Validation_MSG;
  btnDisable: boolean = false;
  isVisible: boolean = false;
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
  checkInTime: any;
  checkOutTime: any;
  checkInHours: any;
  checkInMin: any;
  checkInSec: any;
  differenceBw: any;
  inProgress = false;
  seconds: number = 10;
  maxValue: number = 10;
  intervalId: any;
  constructor() {
    this.isEnableDate = new Date(this.todayDate).toLocaleDateString();
    this.loginUser = JSON.parse(localStorage.getItem(COMMON_MSG.user)!);
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

    this.dataWithDates();
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
    let weekNames = [
      {
        day: "Monday",
        date: this.mondayDate,
      },
      {
        day: "Tuesday",
        date: this.tuesdayDate,
      },
      {
        day: "Wednesday",
        date: this.wednesdayDate,
      },
      {
        day: "Thursday",
        date: this.thursdayDate,
      },
      {
        day: "Friday",
        date: this.fridayDate,
      },
      {
        day: "Saturday",
        date: this.saturdayDate,
      },
      {
        day: "Sunday",
        date: this.sundayDate,
      },
    ];
    let newId = Math.floor(Math.random() * (1000000 - 100000) + 100000);
    if (this.loginUser) {
      for (let week of weekNames) {
        this.weekData.push({
          id: newId,
          name: this.loginUser.email,
          weekName: week.day,
          date: week.date,
          bar: "",
          checkIn: this.checkInTime,
          checkOut: this.checkOutTime,
          difference: "",
        });
      }
    }
  }
  checkInTap() {
    this.checkInHours = new Date().getHours();
    this.checkInMin = new Date().getMinutes();
    this.checkInSec = new Date().getSeconds();
    this.checkInTime = new Date().toLocaleTimeString();
    let currentdata = [];
    for (let day of this.weekData) {
      if (day.date === this.isEnableDate) {
        currentdata.push({
          id: day.id,
          name: day.name,
          weekName: day.weekName,
          date: day.date,
          bar: day.bar,
          checkIn: this.checkInTime,
          checkOut: day.checkOut,
          difference: day.difference,
        });
      } else {
        currentdata.push(day);
      }
    }
    this.weekData = [];
    this.weekData = currentdata;
    if (this.inProgress) {
      clearInterval(this.intervalId);
    } else {
      if (this.seconds === 0) {
        this.seconds = 10;
      }
      this.intervalId = setInterval(() => this.timer(), 1000);
    }
    this.inProgress = !this.inProgress;
  }
  checkOutTap() {
    this.checkOutTime = new Date().toLocaleTimeString();
    let checkOutHours = new Date().getHours();
    let checkOutMin = new Date().getMinutes();
    let checkOutSec = new Date().getSeconds();
    let hoursBw = Math.abs(checkOutHours - this.checkInHours);
    let minBw = Math.abs(checkOutMin - this.checkInMin);
    let secBw = Math.abs(checkOutSec - this.checkInSec);
    this.differenceBw = `${hoursBw}:${minBw}:${secBw}`;
    let currentdata = [];
    for (let day of this.weekData) {
      if (day.date === this.isEnableDate) {
        currentdata.push({
          id: day.id,
          name: day.name,
          weekName: day.weekName,
          date: day.date,
          bar: day.bar,
          checkIn: day.checkIn,
          checkOut: this.checkOutTime,
          difference: this.differenceBw,
        });
      } else {
        currentdata.push(day);
      }
    }
    this.weekData = [];
    this.weekData = currentdata;
  }
  timer() {
    this.seconds--;
    if (this.seconds == 0) {
      this.inProgress = !this.inProgress;
      clearInterval(this.intervalId);
    }
  }
  format(value: any) {
    return `Loading: ${value * 100}%`;
  }
}
