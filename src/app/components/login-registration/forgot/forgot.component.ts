import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import {
  COMMON_MSG,
  DropdownValues,
  Validation_MSG,
} from "src/app/common/messages/common-msg";
import { SecurityQuestions } from "src/app/models/login.model";

@Component({
  selector: "app-forgot",
  templateUrl: "./forgot.component.html",
  styleUrls: ["./forgot.component.css"],
})
export class ForgotComponent implements OnInit {
  COMMON_MSG = COMMON_MSG;
  error_msg = Validation_MSG;
  questions = DropdownValues.securityQuestions;
  nextBtnTooltip: boolean = false;
  backBtnTooltip: boolean = false;
  securityQusArray: SecurityQuestions[] = [];
  securityQus1: SecurityQuestions = {};
  securityQus2: SecurityQuestions = {};
  securityQus3: SecurityQuestions = {};
  showQues2: boolean = false;
  showQues3: boolean = false;
  loadingVisible: boolean = true;
  securityQuestionsData: SecurityQuestions[];
  constructor(private router: Router) {
    this.securityQuestionsData = JSON.parse(
      localStorage.getItem(COMMON_MSG.securityQuestions)!
    );
    if (this.securityQuestionsData) {
      this.securityQus1.question = this.securityQuestionsData[0].question;
      this.securityQus1.answer = this.securityQuestionsData[0].answer;
      this.securityQus2.question = this.securityQuestionsData[1].question;
      this.securityQus2.answer = this.securityQuestionsData[1].answer;
      this.securityQus3.question = this.securityQuestionsData[2].question;
      this.securityQus3.answer = this.securityQuestionsData[2].answer;
    }
  }

  ngOnInit(): void {}
  onShown() {
    setTimeout(() => {
      this.loadingVisible = false;
    }, COMMON_MSG.setTimeout2000);
  }
  onFormSubmit(event: any) {
    
  }

  toggleNextBtn() {
    this.nextBtnTooltip = !this.nextBtnTooltip;
  }

  toggleBackBtn() {
    this.backBtnTooltip = !this.backBtnTooltip;
  }

  backPage() {
    this.router.navigate(["/login/login-page"]);
  }

  q1ValueChanged(event: any, text: string) {
    if ( this.securityQus1.answer === event.value) {
      this.showQues2 = true;
    } else {
      this.showQues2 = false;
    }
  }

  q2ValueChanged(event: any, text: string) {
    if (this.securityQus2.answer === event.value) {
      this.showQues3 = true;
    } else {
      this.showQues3 = false;
    }
  }

  q3ValueChanged(event: any, text: string) {
  }
  securityQus1Comparison = () => this.securityQus1.answer;
  securityQus2Comparison = () => this.securityQus2.answer;
  securityQus3Comparison = () => this.securityQus3.answer;
}
