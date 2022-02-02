import { Component, OnInit } from "@angular/core";
import {
  COMMON_MSG,
  DropdownValues,
  Validation_MSG,
} from "src/app/common/messages/common-msg";
import { Employee } from "src/app/models/scrum.model";

@Component({
  selector: "app-sprint-planning",
  templateUrl: "./sprint-planning.component.html",
  styleUrls: ["./sprint-planning.component.css"],
})
export class SprintPlanningComponent implements OnInit {
  COMMON_MSG = COMMON_MSG;
  error_Msg = Validation_MSG;
  capacityData = DropdownValues.capacity;
  priority = DropdownValues.priority;
  btnDisable: boolean = false;
  leavePlanesToast: boolean = false;
  sprintPlaneToast: boolean = false;
  sprintUserStoriesToast: boolean = false;
  loadingVisible: boolean = true;
  employeeData: Employee[];
  leavePlans: any = [];
  sprintPlane: any = [];
  sprintUserStories: any = [];
  storyPoints: number = NaN;
  percentage: number = NaN;
  leavesTab: boolean = true;
  sprintTab: boolean = false;
  userStoryTab: boolean = false;
  leaveBtnDisable: boolean = false;
 
  constructor() {
    this.employeeData = JSON.parse(localStorage.getItem(COMMON_MSG.employee)!);
    this.leavePlans = JSON.parse(localStorage.getItem(COMMON_MSG.leavePlans)!);
    this.sprintUserStories = JSON.parse(
      localStorage.getItem(COMMON_MSG.sprintUserStories)!
    );
    if (this.leavePlans) {
      this.getSprintPlaning();
      this.leaveBtnDisable = false;
    } else {
      this.leaveBtnDisable = true;
    }
  }

  ngOnInit(): void {}

  onLoading() {
    setTimeout(() => {
      this.loadingVisible = false;
    }, COMMON_MSG.setTimeout5000);
  }

  calculatePercentage(data: any) {
    return `Total: ${(data.value * 100 * 100) / 100} %`;
  }

  addStoryPoints(data: any) {
    let totalPoints = 0;
    for (let item of this.sprintPlane) {
      if (item.name === data.value) {
        let currentPoints: number = 0;
        for (let p of data.data.storyPoints) {
          let points: number = +p.storyPoint;
          currentPoints = currentPoints + points;
        }
        totalPoints = item.storyPoint - currentPoints;
      }
    }
    return `Available story points = ${totalPoints}`;
  }
  addBtnDisable(data: any) {
    let totalPoints = 0;
    for (let item of this.sprintPlane) {
      if (item.name === data.value) {
        let currentPoints: number = 0;
        for (let p of data.data.storyPoints) {
          let points: number = +p.storyPoint;
          currentPoints = currentPoints + points;
        }
        totalPoints = item.storyPoint - currentPoints;
      }
    }
    if (totalPoints <= 0) {
      return true;
    } else {
      return false;
    }
  }
  storyPointChanged() {
    this.sprintUserStories = this.sprintUserStories;
  }

  leavesTap() {
    this.leavesTab = true;
    this.sprintTab = false;
    this.userStoryTab = false;
  }

  sprintTap() {
    this.leavesTab = false;
    this.sprintTab = true;
    this.userStoryTab = false;
  }

  leaveSubmit() {
    this.loadingVisible = true;
    localStorage.setItem(
      COMMON_MSG.leavePlans,
      JSON.stringify(this.leavePlans)
    );
    this.leavePlanesToast = true;
    this.leavesTab = false;
    this.sprintTab = true;
    this.userStoryTab = false;
    this.getSprintPlaning();
  }

  sprintPlaneSubmit() {
    localStorage.setItem(
      COMMON_MSG.sprintPlane,
      JSON.stringify(this.sprintPlane)
    );
    this.loadingVisible = true;
    this.leavesTab = false;
    this.sprintTab = false;
    this.userStoryTab = true;
  }

  getSprintPlaning() {
    this.sprintPlane = [];
    for (let emp of this.leavePlans) {
      if (emp.empType === "FTE") {
        this.storyPoints = 20 - emp.leaves * 2;
      } else {
        this.storyPoints = 10 - emp.leaves;
      }
      this.percentage = (100 - emp.leaves * 10) / 100;
      this.sprintPlane.push({
        id: emp.id,
        department: emp.department,
        name: emp.name,
        empType: emp.empType,
        storyPoint: this.storyPoints,
        pto: emp.leaves,
        percentage: this.percentage,
      });
    }
  }

  sprintUserStoriesSubmit() {
    localStorage.setItem(
      COMMON_MSG.sprintUserStories,
      JSON.stringify(this.sprintUserStories)
    );
    this.sprintUserStoriesToast = true;
  }

  addRow(event: any) {}
}
