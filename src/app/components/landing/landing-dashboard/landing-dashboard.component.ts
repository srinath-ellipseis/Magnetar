import { Component, OnInit, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { DxDrawerComponent } from "devextreme-angular";

@Component({
  selector: "app-landing-dashboard",
  templateUrl: "./landing-dashboard.component.html",
  styleUrls: ["./landing-dashboard.component.css"],
})
export class LandingDashboardComponent implements OnInit {
  @ViewChild(DxDrawerComponent, { static: false })
  drawer!: DxDrawerComponent;

  isDrawerOpen = false;
  menuOptions: any;
  time = new Date().toLocaleTimeString();

  constructor(private route: Router) {
    this.menuOptions = {
      icon: "menu",
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
    }
    this.isDrawerOpen = !this.isDrawerOpen;
  }

  logout() {
    localStorage.clear();
    sessionStorage.clear();
    this.route.navigate(["home"]);
  }
}
