import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { COMMON_MSG } from "src/app/common/messages/common-msg";
import {
  EduDetails,
  EmpDetails,
  PersonalDetails,
  SecurityQuestions,
} from "src/app/models/login.model";

@Component({
  selector: "app-registration-preview",
  templateUrl: "./registration-preview.component.html",
  styleUrls: ["./registration-preview.component.css"],
})
export class RegistrationPreviewComponent implements OnInit {
  loadingVisible: boolean = true;
  detailsData: PersonalDetails;
  educationData: EduDetails[];
  employeeData: EmpDetails[];
  backBtnTooltip: boolean = false;
  userRole: string;
  securityQuestionsData: SecurityQuestions[];
  constructor(private router: Router) {
    this.educationData = JSON.parse(
      localStorage.getItem(COMMON_MSG.educationForm)!
    );
    this.employeeData = JSON.parse(
      localStorage.getItem(COMMON_MSG.employeeForm)!
    );
    this.detailsData = JSON.parse(
      localStorage.getItem(COMMON_MSG.personalDetalis)!
    );
    this.userRole = JSON.parse(localStorage.getItem(COMMON_MSG.userRole)!);
    this.securityQuestionsData = JSON.parse(
      localStorage.getItem(COMMON_MSG.securityQuestions)!
    );
  }

  ngOnInit(): void {}

  onShown() {
    setTimeout(() => {
      this.loadingVisible = false;
    }, COMMON_MSG.setTimeout2000);
  }

  goToDetailsPage() {
    this.router.navigate(["/login/registration-details"]);
  }
  goToEduEmpPage() {
    this.router.navigate(["/login/registration-edu-emp"]);
  }
  editEduForm(data: any) {
    localStorage.setItem(COMMON_MSG.editEduData, JSON.stringify(data));
    this.goToEduEmpPage();
  }
  editEmpForm(data: any) {
    localStorage.setItem(COMMON_MSG.editEmpData, JSON.stringify(data));
    this.goToEduEmpPage();
  }
  backPage() {
    if (this.userRole === COMMON_MSG.new) {
      this.router.navigate(["/login/registration-edu-emp"]);
    } else {
      this.router.navigate(["/login/security"]);
    }
  }
  toggleBackBtn() {
    this.backBtnTooltip = !this.backBtnTooltip;
  }
  registrationBtn() {
    alert(COMMON_MSG.Success);
  }
  goToSecurityPage(){
    this.router.navigate(["/login/security"]);
  }
}
