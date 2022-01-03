import { Component, OnInit } from "@angular/core";
import { COMMON_MSG } from "src/app/common/messages/common-msg";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"],
})
export class NavbarComponent implements OnInit {
  COMMON_MSG= COMMON_MSG
  constructor() {}

  ngOnInit(): void {}
  clearForms() {
    localStorage.removeItem(COMMON_MSG.personalDetalis);
    localStorage.removeItem(COMMON_MSG.educationForm);
    localStorage.removeItem(COMMON_MSG.employeeForm);
    localStorage.removeItem(COMMON_MSG.securityQuestions);
  }
}
