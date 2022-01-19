import { Component, OnInit, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { DxDrawerComponent } from "devextreme-angular";
import { COMMON_MSG } from "src/app/common/messages/common-msg";

@Component({
  selector: "app-landing-dashboard",
  templateUrl: "./landing-dashboard.component.html",
  styleUrls: ["./landing-dashboard.component.css"],
})
export class LandingDashboardComponent implements OnInit {
  @ViewChild(DxDrawerComponent, { static: false })
  drawer!: DxDrawerComponent;
  COMMON_MSG = COMMON_MSG;
  isDrawerOpen = false;
  menuOptions: any;
  time = new Date().toLocaleTimeString();
  logoutVisible: boolean = false;
  constructor(private route: Router) {
    this.menuOptions = {
      icon: "menu",
      stylingMode: "text",
      onClick: () => {
        this.isDrawerOpen = !this.isDrawerOpen;
      },
    };
  }

  ngOnInit(): void {}

  routerLink(page: string) {
    if (page === "holidaysList") {
      this.route.navigate(["landing/dashboard/holidays-list"]);
    } else if (page === "department") {
      this.route.navigate(["landing/scrum/department"]);
    } else if (page === "employee") {
      this.route.navigate(["landing/scrum/employee"]);
    } else if (page === "standup") {
      this.route.navigate(["landing/scrum/standup-status"]);
    } else if (page === "sprintplanning") {
      this.route.navigate(["landing/scrum/sprint-planning"]);
    }
    this.isDrawerOpen = !this.isDrawerOpen;
  }

  userTap() {
    this.logoutVisible = true;
  }

  logout() {
    localStorage.clear();
    sessionStorage.clear();
    this.route.navigate(["home"]);
  }
}
