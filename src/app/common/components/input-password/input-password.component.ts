import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { COMMON_MSG } from "../../messages/common-msg";

@Component({
  selector: "app-input-password",
  templateUrl: "./input-password.component.html",
  styleUrls: ["./input-password.component.css"],
})
export class InputPasswordComponent implements OnInit {
  COMMON_MSG = COMMON_MSG;
  @Input() placeholder: string = "Enter Password";
  @Input() comparePassword: any;
  @Input() showPattern: boolean = false;
  @Input() passwordValue: any;
  @Input() showCompare: boolean = false;
  @Output() value = new EventEmitter();
  passwordMode: string;
  passwordButton: any;
  hidePasswordButton: any;
  compareName: string;
  passwordPattern: any =
    /^(?:(?=.*[a-z])(?:(?=.*[A-Z])(?=.*[\d\W])|(?=.*\W)(?=.*\d))|(?=.*\W)(?=.*[A-Z])(?=.*\d)).{8,}$/;
  constructor() {
    this.passwordMode = "password";
    this.passwordButton = {
      icon: "assets/images/eye-icon-slash.svg",
      type: "default",
      onClick: () => {
        this.passwordMode = this.passwordMode === "text" ? "password" : "text";
      },
    };
    this.hidePasswordButton = {
      icon: "assets/images/eye-icon.svg",
      type: "default",
      onClick: () => {
        this.passwordMode = this.passwordMode === "text" ? "password" : "text";
      },
    };
    this.compareName = this.comparePassword;
  }

  ngOnInit(): void {}
  ngOnChanges() {
    this.compareName = this.comparePassword;
  }
  valueChanged(event: any) {
    this.passwordValue = event.value;
    this.value.emit(this.passwordValue);
  }
  passwordComparison = () => this.compareName;
}
