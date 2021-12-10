import { Component, OnInit } from "@angular/core";
import { COMMON_MSG } from "../../../common/messages/common-msg";
import { Router } from "@angular/router";
import { formatDate } from "@angular/common";

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

  maxDate: any;
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
  phonePattern: any = /^(?!0+$)\d{8,}$/;
  phoneRules: any = {
    X: /[02-9]/,
  };
  zipcodeRules: any = {
    X: /[0-9]+/,
  };
  loadingVisible: boolean = true;
  checked: boolean = false;
  nextBtnTooltip: boolean = false;
  constructor(private router: Router) {
    let date = new Date();
    let oldDate = new Date(date.setFullYear(date.getFullYear() - 25));
    this.maxDate = formatDate(oldDate, "yyyy-MM-dd hh:mm:ssZZZZZ", "en_US");
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

  onShown() {
    setTimeout(() => {
      this.loadingVisible = false;
    }, 2000);
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
      this.detailsData.password = event;
    } else if (value === "confirmPassword") {
      this.detailsData.rePassword = event;
    } else if (value === "dob") {
      this.detailsData.dob = formatDate(
        event.value,
        "yyyy-MM-dd hh:mm:ssZZZZZ",
        "en_US"
      );
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
