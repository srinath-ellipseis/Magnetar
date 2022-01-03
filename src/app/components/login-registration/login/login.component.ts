import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { COMMON_MSG, Validation_MSG } from "src/app/common/messages/common-msg";
import { LoginOptions } from "src/app/models/login.model";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  COMMON_MSG = COMMON_MSG;
  error_msg = Validation_MSG;
  loginData: LoginOptions[] = [];
  loginDetails: LoginOptions = {};
  isChecked: boolean = false;
  emailValue: any;
  passwordValue: any;
  userData: any;
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.userData = JSON.parse(localStorage.getItem(COMMON_MSG.loginUser)!);
    if (this.userData) {
      for (let item of this.userData) {
        this.loginData.push({
          email: item.email,
          password: item.password,
        });
      }
    }
  }
  onFormSubmit(event: any) {
    if (this.isChecked) {
      let yourNewData = [];
      for (let i = 0; i < this.loginData.length; i++) {
        if (this.loginData[i].email !== this.loginDetails.email) {
          yourNewData.push(this.loginData[i]);
        }
      }
      yourNewData.push(this.loginDetails);
      localStorage.setItem(COMMON_MSG.loginUser, JSON.stringify(yourNewData));
    }
    this.router.navigate(["/login/registration-details"]);
  }
  valueChanged(event: any, text: string) {
    if (text === COMMON_MSG.email) {
      this.loginDetails.email = event.value;
      for (let user of this.loginData) {
        if (user.email === event.value) {
          this.emailValue = user.email;
          this.passwordValue = user.password;
          this.loginDetails.password = user.password;
        }
      }
    } else {
      this.loginDetails.password = event;
    }
  }
  signupPage() {
    this.router.navigate(["/login/registration"]);
  }
  checkedValue(event: any) {
    this.isChecked = event.value;
  }
  forgotPage() {
    this.router.navigate(["/forgot/mail-verification"]);
  }
}
