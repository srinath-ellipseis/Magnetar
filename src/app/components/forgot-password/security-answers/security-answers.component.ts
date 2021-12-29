import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import {
  COMMON_MSG,
  DropdownValues,
  Validation_MSG,
} from "src/app/common/messages/common-msg";
import { SecurityQuestions } from "src/app/models/login.model";

@Component({
  selector: "app-security-answers",
  templateUrl: "./security-answers.component.html",
  styleUrls: ["./security-answers.component.css"],
})
export class SecurityAnswersComponent implements OnInit {
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
  showValidation1: boolean = false;
  showValidation2: boolean = false;
  showValidation3: boolean = false;
  correctAns1: any;
  worngAns1: any;
  correctAns2: any;
  worngAns2: any;
  correctAns3: any;
  worngAns3: any;
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

  ngOnInit(): void {
    this.correctAns1 = {
      icon: "check",
      type: "success",
    };
    this.worngAns1 = {
      icon: "clear",
      type: "danger",
    };
    this.correctAns2 = {
      icon: "check",
      type: "success",
    };
    this.worngAns2 = {
      icon: "clear",
      type: "danger",
    };
    this.correctAns3 = {
      icon: "check",
      type: "success",
    };
    this.worngAns3 = {
      icon: "clear",
      type: "danger",
    };
  }
  onShown() {
    setTimeout(() => {
      this.loadingVisible = false;
    }, COMMON_MSG.setTimeout2000);
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
  submit() {
    this.router.navigate(["/forgot/mail-verification"]);
  }
  q1ValueChanged(event: any, text: string) {
    if (this.securityQus1.answer === event.value) {
      this.showValidation1 = true;
      this.showQues2 = true;
    } else {
      this.showValidation1 = false;
      this.showQues2 = false;
    }
  }

  q2ValueChanged(event: any, text: string) {
    if (this.securityQus2.answer === event.value) {
      this.showValidation2 = true;
      this.showQues3 = true;
    } else {
      this.showValidation2 = false;
      this.showQues3 = false;
    }
  }

  q3ValueChanged(event: any, text: string) {
    if (this.securityQus3.answer === event.value) {
      this.showValidation3 = true;
    } else {
      this.showValidation3 = false;
    }
  }
}
