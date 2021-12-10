import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { COMMON_MSG } from "../../common/messages/common-msg";

@Component({
  selector: "app-login-page",
  templateUrl: "./login-page.component.html",
  styleUrls: ["./login-page.component.css"],
})
export class LoginPageComponent implements OnInit {
  COMMON_MSG = COMMON_MSG;
  loginData = {
    Email: "",
    Password: "",
  };
  constructor(private router: Router) {}

  ngOnInit(): void {}
  onFormSubmit(e: any) {
    localStorage.setItem("loginUser", JSON.stringify(this.loginData));
    this.router.navigate(["/registration-details"]);
  }
  valueChanged(event: any, text: string) {
    if (text === "email") {
      this.loginData.Email = event.value;
    } else {
      this.loginData.Password = event.value;
    }
  }
}
