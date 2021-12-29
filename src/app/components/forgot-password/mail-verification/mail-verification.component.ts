import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { COMMON_MSG, Validation_MSG } from "src/app/common/messages/common-msg";

@Component({
  selector: "app-mail-verification",
  templateUrl: "./mail-verification.component.html",
  styleUrls: ["./mail-verification.component.css"],
})
export class MailVerificationComponent implements OnInit {
  COMMON_MSG = COMMON_MSG;
  error_msg = Validation_MSG;
  loadingVisible: boolean = true;
  btnDisable: boolean = false;
  showValidation: boolean = false;
  otpValidation: boolean = false;
  correctOtp: any;
  worngOtp: any;
  correctMail: any;
  worngMail: any;
  // mailPattern: any =/[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}$/;
  mailValue: any;
  otpCode: any;
  otpValue: any;
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.correctMail = {
      icon: "check",
      type: "success",
    };
    this.worngMail = {
      icon: "clear",
      type: "danger",
    };
    this.correctOtp = {
      icon: "check",
      type: "success",
    };
    this.worngOtp = {
      icon: "clear",
      type: "danger",
    };
  }
  onShown() {
    setTimeout(() => {
      this.loadingVisible = false;
    }, COMMON_MSG.setTimeout2000);
  }
  mailValueChanged(event: any) {
    this.mailValue = event.value;
    if (this.mailValue === "abcd@gmail.com") {
      this.showValidation = true;
      this.otpCode = Math.floor(Math.random() * (1000000 - 100000) + 100000);
      console.log(this.otpCode);
    }
  }
  otpValueChanged(event: any) {
    this.otpValue = event.value;
    if (this.otpCode === this.otpValue) {
      this.otpValidation = true;
      this.btnDisable = true;
    }
  }
  submit() {
    this.router.navigate(["/forgot/update-password"]);
  }
}
