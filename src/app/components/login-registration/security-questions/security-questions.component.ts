import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import {
  COMMON_MSG,
  DropdownValues,
  Validation_MSG,
} from "src/app/common/messages/common-msg";
import { SecurityQuestions } from "src/app/models/login.model";

@Component({
  selector: "app-security-questions",
  templateUrl: "./security-questions.component.html",
  styleUrls: ["./security-questions.component.css"],
})
export class SecurityQuestionsComponent implements OnInit {
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
  userRole: string;
  securityQuestionsData: SecurityQuestions[];
  constructor(private router: Router) {
    this.userRole = JSON.parse(localStorage.getItem(COMMON_MSG.userRole)!);
    this.securityQuestionsData = JSON.parse(
      localStorage.getItem(COMMON_MSG.securityQuestions)!
    );
    this.answers1Callback = this.answers1Callback.bind(this);
    this.answers2Callback = this.answers2Callback.bind(this);
    this.answers3Callback = this.answers3Callback.bind(this);
    if (this.securityQuestionsData) {
      this.securityQus1.question = this.securityQuestionsData[0].question;
      this.securityQus1.answer = this.securityQuestionsData[0].answer;
      this.securityQus2.question = this.securityQuestionsData[1].question;
      this.securityQus2.answer = this.securityQuestionsData[1].answer;
      this.securityQus3.question = this.securityQuestionsData[2].question;
      this.securityQus3.answer = this.securityQuestionsData[2].answer;
      this.showQues2 = true;
      this.showQues3 = true;
      for (let que of this.questions) {
        if (que.name === this.securityQuestionsData[0].question) {
          que.disabled = true;
        } else if (que.name === this.securityQuestionsData[1].question) {
          que.disabled = true;
        } else if (que.name === this.securityQuestionsData[2].question) {
          que.disabled = true;
        } else {
          que.disabled = false;
        }
      }
    }
  }

  ngOnInit(): void {}
  onShown() {
    setTimeout(() => {
      this.loadingVisible = false;
    }, COMMON_MSG.setTimeout2000);
  }
  onFormSubmit(event: any) {
    this.securityQusArray.push(
      this.securityQus1,
      this.securityQus2,
      this.securityQus3
    );
    localStorage.setItem(
      COMMON_MSG.securityQuestions,
      JSON.stringify(this.securityQusArray)
    );
    if (this.userRole === COMMON_MSG.new) {
      this.router.navigate(["/login/registration-edu-emp"]);
    } else {
      this.router.navigate(["/login/registration-preview"]);
    }
  }
  toggleNextBtn() {
    this.nextBtnTooltip = !this.nextBtnTooltip;
  }
  toggleBackBtn() {
    this.backBtnTooltip = !this.backBtnTooltip;
  }
  backPage() {
    this.router.navigate(["/login/registration-details"]);
  }

  q1ValueChanged(event: any, text: string) {
    if (text === COMMON_MSG.question) {
      this.securityQus1.question = event.value;
      for (let que of this.questions) {
        if (que.name === this.securityQus1.question) {
          que.disabled = true;
        } else if (que.name === this.securityQus2.question) {
          que.disabled = true;
        } else if (que.name === this.securityQus3.question) {
          que.disabled = true;
        } else {
          que.disabled = false;
        }
      }
    } else if (text === COMMON_MSG.answer) {
      this.securityQus1.answer = event.value;
    }
  }

  q2ValueChanged(event: any, text: string) {
    if (text === COMMON_MSG.question) {
      this.securityQus2.question = event.value;
      for (let que of this.questions) {
        if (que.name === this.securityQus1.question) {
          que.disabled = true;
        } else if (que.name === this.securityQus2.question) {
          que.disabled = true;
        } else if (que.name === this.securityQus3.question) {
          que.disabled = true;
        } else {
          que.disabled = false;
        }
      }
    } else if (text === COMMON_MSG.answer) {
      this.securityQus2.answer = event.value;
    }
  }

  q3ValueChanged(event: any, text: string) {
    if (text === COMMON_MSG.question) {
      this.securityQus3.question = event.value;
      for (let que of this.questions) {
        if (que.name === this.securityQus1.question) {
          que.disabled = true;
        } else if (que.name === this.securityQus2.question) {
          que.disabled = true;
        } else if (que.name === this.securityQus3.question) {
          que.disabled = true;
        } else {
          que.disabled = false;
        }
      }
    } else if (text === COMMON_MSG.answer) {
      this.securityQus3.answer = event.value;
    }
  }

  answers1Callback(event: any) {
    if (
      event.value === this.securityQus2.answer ||
      event.value === this.securityQus3.answer
    ) {
      return false;
    } else {
      if (this.securityQus1.question && this.securityQus1.answer) {
        this.showQues2 = true;
      } else {
        this.showQues2 = false;
      }
      return true;
    }
  }
  answers2Callback(event: any) {
    if (
      event.value === this.securityQus1.answer ||
      event.value === this.securityQus3.answer
    ) {
      return false;
    } else {
      if (this.securityQus2.question && this.securityQus2.answer) {
        this.showQues3 = true;
      } else {
        this.showQues3 = false;
      }
      return true;
    }
  }
  answers3Callback(event: any) {
    if (
      event.value === this.securityQus1.answer ||
      event.value === this.securityQus2.answer
    ) {
      return false;
    } else {
      return true;
    }
  }
}
