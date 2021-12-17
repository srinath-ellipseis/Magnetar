import { formatDate } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { COMMON_MSG, DropdownValues } from "src/app/common/messages/common-msg";
import { PersonalDetails } from "src/app/models/login.model";

@Component({
  selector: "app-registration-details",
  templateUrl: "./registration-details.component.html",
  styleUrls: ["./registration-details.component.css"],
})
export class RegistrationDetailsComponent implements OnInit {
  COMMON_MSG = COMMON_MSG;
  genders = DropdownValues.genders;
  roles = DropdownValues.roles
  countries = DropdownValues.countries;
  states= DropdownValues.states;
  cities= DropdownValues.cities;
  maxDate: any;
  detailsData: PersonalDetails={};
  detailsForm: PersonalDetails;
  namePattern: any = /^[^0-9]+$/;
  loadingVisible: boolean = true;
  checked: boolean = false;
  nextBtnTooltip: boolean = false;
  constructor(private router: Router) {
    let date = new Date();
    let oldDate = new Date(date.setFullYear(date.getFullYear() - COMMON_MSG.dobAgeLimit));
    this.maxDate = formatDate(oldDate, "yyyy-MM-dd hh:mm:ssZZZZZ", "en_US");

    this.detailsForm = JSON.parse(localStorage.getItem(COMMON_MSG.personalDetalis)!);
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
      this.detailsData.countryCode = this.detailsForm.countryCode;
      this.checked = true;
    }
  }

  ngOnInit(): void {
  }

  onShown() {
    setTimeout(() => {
      this.loadingVisible = false;
    }, COMMON_MSG.setTimeout2);
  }

  onFormSubmit(event: any) {
    localStorage.setItem(COMMON_MSG.personalDetalis, JSON.stringify(this.detailsData));
    this.router.navigate(["/login/registration-edu-emp"]);
  }

  valueChanged(event: any, value: string) {
    if (value === COMMON_MSG.firstName) {
      this.detailsData.firstName = event.value;
    } else if (value === COMMON_MSG.lastName) {
      this.detailsData.lastName = event.value;
    } else if (value === COMMON_MSG.email) {
      this.detailsData.email = event.value;
    } else if (value === COMMON_MSG.password) {
      this.detailsData.password = event;
    } else if (value === COMMON_MSG.confirmPassword) {
      this.detailsData.rePassword = event;
    } else if (value === COMMON_MSG.dob) {
      this.detailsData.dob = formatDate(
        event.value,
        "yyyy-MM-dd hh:mm:ssZZZZZ",
        "en_US"
      );
    } else if (value === COMMON_MSG.genders) {
      this.detailsData.gender = event.value;
    } else if (value === COMMON_MSG.country) {
      this.detailsData.country = event.value;
    } else if (value === COMMON_MSG.states) {
      this.detailsData.state = event.value;
    } else if (value === COMMON_MSG.city) {
      this.detailsData.city = event.value;
    } else if (value === COMMON_MSG.zipcode) {
      this.detailsData.zipcode = event.value;
    } else if (value === COMMON_MSG.mobileNumber) {
      this.detailsData.mobileNumber = event;
    } else if (value === COMMON_MSG.countryCode) {
      this.detailsData.countryCode = event;
    }
  }
  toggleNextBtn() {
    this.nextBtnTooltip = !this.nextBtnTooltip;
  }
}
