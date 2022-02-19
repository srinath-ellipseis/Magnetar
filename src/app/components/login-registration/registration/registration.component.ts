import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { COMMON_MSG } from "src/app/common/messages/common-msg";

@Component({
  selector: "app-registration",
  templateUrl: "./registration.component.html",
  styleUrls: ["./registration.component.css"],
})
export class RegistrationComponent implements OnInit {
  COMMON_MSG = COMMON_MSG;
  constructor(private router: Router) {}

  ngOnInit(): void {}

  goToDetailPage(name: string) {
    localStorage.setItem(
      COMMON_MSG.userRole,
      JSON.stringify(name)
    );
    this.router.navigate(["login/registration-details"]);
  }
}
