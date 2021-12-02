import { Component, OnInit } from "@angular/core";
import { COMMON_MSG } from "../../../common/messages/common-msg";
import { Router } from "@angular/router";
import * as dayjs from "dayjs";

@Component({
  selector: "app-registration-details",
  templateUrl: "./registration-details.component.html",
  styleUrls: ["./registration-details.component.css"],
})
export class RegistrationDetailsComponent implements OnInit {
  COMMON_MSG = COMMON_MSG;
  genders: any = ["Male", "Female", "Others"];
  roles: any = ["Student", "Employee", "Client/Vendor"];
  countries: any = ["USA", "UK", "Canada", "India"];
  states: any = ["Texas", "North London", "Andhra Pradesh", "British Columbia"];
  cities: any = ["Houston", "Austin", "Chittoor", "Tirupathi", "Vancouver"];

  maxDate: Date = new Date();
  passwordMode: string;
  passwordButton: any;
  hidePasswordBtn: any;
  changePasswordBtn: any;
  hideChangePasswordBtn: any;
  changePasswordMode: string;
  changePasswordButton: any;
  hidePasswordButton: any;
  hideChangePasswordButton: any;
  detailsData = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    rePassword: "",
    gender: "",
    dob: "",
    country: "",
    state: "",
    city: "",
    zipcode: "",
    mobileNumber: "",
  };
  detailsForm: any;
  namePattern: any = /^[^0-9]+$/;
  phonePattern: any = /^[6-9][0-9]{9}$/;
  phoneRules: any = {
    X: /[02-9]/,
  };
  zipcodeRules: any = {
    X: /[0-9]+/,
  };
  passwordPattern: any =
    /^(?:(?=.*[a-z])(?:(?=.*[A-Z])(?=.*[\d\W])|(?=.*\W)(?=.*\d))|(?=.*\W)(?=.*[A-Z])(?=.*\d)).{8,}$/;
  loadingVisible: boolean = true;
  checked: boolean = false;
  nextBtnTooltip: boolean = false;
  constructor(private router: Router) {
    this.passwordMode = "password";
    this.changePasswordMode = "password";
    this.maxDate = new Date(
      this.maxDate.setFullYear(this.maxDate.getFullYear() - 25)
    );
    this.passwordButton = {
      icon: "assets/images/eye-icon-slash.svg",
      type: "default",
      onClick: () => {
        this.passwordMode = this.passwordMode === "text" ? "password" : "text";
      },
    };
    this.hidePasswordBtn = {
      icon: "assets/images/eye-icon.svg",
      type: "default",
      onClick: () => {
        this.passwordMode = this.passwordMode === "text" ? "password" : "text";
      },
    };
    this.changePasswordBtn = {
      icon: "assets/images/eye-icon-slash.svg",
      type: "default",
      onClick: () => {
        this.changePasswordMode =
          this.changePasswordMode === "text" ? "password" : "text";
      },
    };
    this.hideChangePasswordBtn = {
      icon: "assets/images/eye-icon.svg",
      type: "default",
      onClick: () => {
        this.changePasswordMode =
          this.changePasswordMode === "text" ? "password" : "text";
      },
    };
  }

  ngOnInit(): void {
    this.detailsForm = JSON.parse(localStorage.getItem("detailsForm")!);
    if (this.detailsForm) {
      this.detailsData.firstName = this.detailsForm.firstName;
      this.detailsData.lastName = this.detailsForm.lastName;
      this.detailsData.email = this.detailsForm.email;
      this.detailsData.password = this.detailsForm.password;
      this.detailsData.rePassword = this.detailsForm.rePassword;
      this.detailsData.dob = this.detailsForm.dob;
      this.detailsData.gender = this.detailsForm.gender;
      this.detailsData.country = this.detailsForm.country;
      this.detailsData.state = this.detailsForm.state;
      this.detailsData.city = this.detailsForm.city;
      this.detailsData.zipcode = this.detailsForm.zipcode;
      this.detailsData.mobileNumber = this.detailsForm.mobileNumber;
      this.checked = true;
    }
  }

  passwordComparison = () => this.detailsData.password;
  onShown() {
    setTimeout(() => {
      this.loadingVisible = false;
    }, 2000);
  }

  onHidden() {}

  checkComparison() {
    return true;
  }

  submitButtonOptions = {
    text: "Login",
    useSubmitBehavior: true,
  };

  onFormSubmit(e: any) {
    localStorage.setItem("detailsForm", JSON.stringify(this.detailsData));
    this.router.navigate(["/registration-edu-emp"]);
  }

  valueChanged(event: any, value: string) {
    if (value === "firstName") {
      this.detailsData.firstName = event.value;
    } else if (value === "lastName") {
      this.detailsData.lastName = event.value;
    } else if (value === "email") {
      this.detailsData.email = event.value;
    } else if (value === "password") {
      this.detailsData.password = event.value;
    } else if (value === "confirmPassword") {
      this.detailsData.rePassword = event.value;
    } else if (value === "dob") {
      this.detailsData.dob = event.value;
    } else if (value === "genders") {
      this.detailsData.gender = event.value;
    } else if (value === "country") {
      this.detailsData.country = event.value;
    } else if (value === "states") {
      this.detailsData.state = event.value;
    } else if (value === "city") {
      this.detailsData.city = event.value;
    } else if (value === "zipcode") {
      this.detailsData.zipcode = event.value;
    } else if (value === "mobileNumber") {
      this.detailsData.mobileNumber = event.value;
    }
  }
  toggleNextBtn() {
    this.nextBtnTooltip = !this.nextBtnTooltip;
  }
}
