import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import {
  COMMON_MSG,
  DropdownValues,
  Validation_MSG,
} from "src/app/common/messages/common-msg";
import { EduDetails, EmpDetails } from "src/app/models/login.model";

@Component({
  selector: "app-registration-edu-emp",
  templateUrl: "./registration-edu-emp.component.html",
  styleUrls: ["./registration-edu-emp.component.css"],
})
export class RegistrationEduEmpComponent implements OnInit {
  COMMON_MSG = COMMON_MSG;
  error_msg = Validation_MSG;
  countries = DropdownValues.countries;
  states = DropdownValues.states;
  cities = DropdownValues.cities;
  levelEdu = DropdownValues.levelEdu;
  gpaCodes = DropdownValues.gpaCodes;
  empForm: EmpDetails = {};
  eduForm: EduDetails = {};
  loadingVisible: boolean = true;
  empFormVisible: boolean = false;
  eduFormVisible: boolean = false;
  checked: boolean = false;
  empFormData: EmpDetails[] = [];
  eduFormData: EduDetails[] = [];
  educationData: EduDetails[] = [];
  employeeData: EmpDetails[] = [];
  empCurrentData: any;
  eduCurrentData: any;
  eduCurrentDelete: any;
  empCurrentDelete: any;
  editEduData: EduDetails;
  editEmpData: EmpDetails;
  eduDeletePopup: boolean = false;
  empDeletePopup: boolean = false;
  eduFormDisable: boolean = false;
  empFormDisable: boolean = false;
  defaultVisible = false;
  viewTooltipVisible = false;
  editTooltipVisible = false;
  deleteTooltipVisible = false;
  backBtnTooltip: boolean = false;
  nextBtnTooltip: boolean = false;
  fromDate = new Date();
  eduFromMaxDate = new Date();
  eduToMinDate = new Date();
  empFromMaxDate = new Date();
  empToMinDate = new Date();
  gpaCodeLength: number = 0;
  gradePattern: any = /^[^0-9]+$/;
  percentagePattern: any =
    /(^100(\.0{1,2})?$)|(^([1-9]([0-9])?|0)(\.[0-9]{1,2})?$)/;
  floatPattern: any = /^\d+\.\d{1,2}$/;
  percentageButton: any;
  constructor(private router: Router) {
    this.employeeData = JSON.parse(
      localStorage.getItem(COMMON_MSG.employeeForm)!
    );
    this.educationData = JSON.parse(
      localStorage.getItem(COMMON_MSG.educationForm)!
    );
    if (this.employeeData) {
      for (let emp of this.employeeData) {
        this.empFormData.push({
          companyName: emp.companyName,
          designation: emp.designation,
          roles: emp.roles,
          projects: emp.projects,
          toDate: emp.toDate,
          formDate: emp.formDate,
          country: emp.country,
          state: emp.state,
          city: emp.city,
          zipcode: emp.zipcode,
        });
      }
    }
    if (this.educationData) {
      for (let edu of this.educationData) {
        this.eduFormData.push({
          collegeName: edu.collegeName,
          major: edu.major,
          levelEdu: edu.levelEdu,
          toDate: new Date(edu.toDate),
          formDate: new Date(edu.formDate),
          gpa: edu.gpa,
          gpaCode: edu.gpaCode,
          projects: edu.projects,
          country: edu.country,
          state: edu.state,
          city: edu.city,
          zipcode: edu.zipcode,
        });
        if (edu.levelEdu === COMMON_MSG.Diploma) {
          this.levelEdu[0].disabled = true;
        } else if (edu.levelEdu === COMMON_MSG.BachelorDegree) {
          this.levelEdu[1].disabled = true;
        }
      }
    }
    this.editEduData = JSON.parse(
      localStorage.getItem(COMMON_MSG.editEduData)!
    );
    this.editEmpData = JSON.parse(
      localStorage.getItem(COMMON_MSG.editEmpData)!
    );
    if (this.editEduData) {
      let editData = [];
      editData.push({
        collegeName: this.editEduData.collegeName,
        major: this.editEduData.major,
        levelEdu: this.editEduData.levelEdu,
        toDate: new Date(this.editEduData.toDate),
        formDate: new Date(this.editEduData.formDate),
        gpa: this.editEduData.gpa,
        gpaCode: this.editEduData.gpaCode,
        projects: this.editEduData.projects,
        country: this.editEduData.country,
        state: this.editEduData.state,
        city: this.editEduData.city,
        zipcode: this.editEduData.zipcode,
      });
      this.goToEduForm(editData[0], COMMON_MSG.edit);
    }
    if (this.editEmpData) {
      this.goToEmpForm(this.editEmpData, COMMON_MSG.edit);
    }
    this.percentageButton = {
      text: "%",
      stylingMode: "text",
      width: 32,
    };
  }

  ngOnInit(): void {}

  onShown() {
    setTimeout(() => {
      this.loadingVisible = false;
    }, COMMON_MSG.setTimeout2000);
  }

  goToEmpForm(event: any, type: string) {
    if (event === COMMON_MSG.new) {
      this.empFormDisable = false;
      this.empCurrentData = "";
    } else {
      this.empCurrentData = event;
      if (type === COMMON_MSG.view) {
        this.empFormDisable = true;
      } else {
        this.empFormDisable = false;
      }
      if (this.empCurrentData) {
        this.empForm.companyName = this.empCurrentData.companyName;
        this.empForm.designation = this.empCurrentData.designation;
        this.empForm.roles = this.empCurrentData.roles;
        this.empForm.projects = this.empCurrentData.projects;
        this.empForm.formDate = this.empCurrentData.formDate;
        this.empForm.toDate = this.empCurrentData.toDate;
        this.empForm.country = this.empCurrentData.country;
        this.empForm.state = this.empCurrentData.state;
        this.empForm.city = this.empCurrentData.city;
        this.empForm.zipcode = this.empCurrentData.zipcode;

        this.empToMinDate = this.empCurrentData.formDate;
        this.empFromMaxDate = this.empCurrentData.toDate;
      }
      if (this.empCurrentData) {
        let yourNewData = [];
        for (let i = 0; i < this.empFormData.length; i++) {
          if (
            this.empFormData[i].companyName !== this.empCurrentData.companyName
          ) {
            yourNewData.push(this.empFormData[i]);
          }
        }
        this.empFormData = [];
        for (let emp of yourNewData) {
          this.empFormData.push({
            companyName: emp.companyName,
            designation: emp.designation,
            roles: emp.roles,
            projects: emp.projects,
            toDate: emp.toDate,
            formDate: emp.formDate,
            country: emp.country,
            state: emp.state,
            city: emp.city,
            zipcode: emp.zipcode,
          });
        }
      }
    }
    this.empFormVisible = true;
  }

  deleteEmpForm(event: any) {
    this.loadingVisible = true;
    let yourNewData = [];
    for (let i = 0; i < this.empFormData.length; i++) {
      if (this.empFormData[i].companyName !== event.companyName) {
        yourNewData.push(this.empFormData[i]);
      }
    }
    localStorage.setItem(COMMON_MSG.employeeForm, JSON.stringify(yourNewData));
    this.empDeletePopup = false;
    window.location.reload();
    setTimeout(() => {
      this.loadingVisible = false;
    }, COMMON_MSG.setTimeout5000);
  }

  empFormSubmit(event: any) {
    this.loadingVisible = true;
    this.empFormData.push(this.empForm);
    localStorage.setItem(
      COMMON_MSG.employeeForm,
      JSON.stringify(this.empFormData)
    );
    localStorage.removeItem(COMMON_MSG.editEmpData);
    window.location.reload();
    this.empFormVisible = false;
    setTimeout(() => {
      this.loadingVisible = false;
    }, COMMON_MSG.setTimeout5000);
  }

  empValueChanged(event: any, text: string) {
    if (text === COMMON_MSG.companyName) {
      this.empForm.companyName = event.value;
    } else if (text === COMMON_MSG.designation) {
      this.empForm.designation = event.value;
    } else if (text === COMMON_MSG.roles) {
      this.empForm.roles = event.value;
    } else if (text === COMMON_MSG.projects) {
      this.empForm.projects = event.value;
    } else if (text === COMMON_MSG.formDate) {
      this.empToMinDate = event;
      this.empForm.formDate = event;
    } else if (text === COMMON_MSG.toDate) {
      this.empFromMaxDate = event;
      this.empForm.toDate = event;
    } else if (text === COMMON_MSG.country) {
      this.empForm.country = event.value;
    } else if (text === COMMON_MSG.states) {
      this.empForm.state = event.value;
    } else if (text === COMMON_MSG.city) {
      this.empForm.city = event.value;
    } else if (text === COMMON_MSG.zipcode) {
      this.empForm.zipcode = event.value;
    }
  }
  closeEmpForm() {
    this.empFormVisible = false;
    localStorage.removeItem(COMMON_MSG.editEmpData);
    window.location.reload();
  }
  goToEmpDeletePopup(event: any) {
    this.empDeletePopup = true;
    this.empCurrentDelete = event;
  }

  cancelEmpDeletePopup() {
    this.empDeletePopup = false;
  }

  goToEduForm(event: any, type: string) {
    if (event === COMMON_MSG.new) {
      this.eduFormDisable = false;
      this.eduCurrentData = "";
    } else {
      this.eduCurrentData = event;
      if (type === COMMON_MSG.view) {
        this.eduFormDisable = true;
      } else {
        this.eduFormDisable = false;
      }
      if (this.eduCurrentData) {
        this.eduForm.collegeName = event.collegeName;
        this.eduForm.major = event.major;
        this.eduForm.levelEdu = event.levelEdu;
        this.eduForm.formDate = event.formDate;
        this.eduForm.toDate = event.toDate;
        this.eduForm.gpa = event.gpa;
        this.eduForm.gpaCode = event.gpaCode;
        this.eduForm.projects = event.projects;
        this.eduForm.country = event.country;
        this.eduForm.state = event.state;
        this.eduForm.city = event.city;
        this.eduForm.zipcode = event.zipcode;
        this.dateRange(new Date(event.formDate));
      }
      if (this.eduCurrentData) {
        let yourNewData = [];
        for (let i = 0; i < this.eduFormData.length; i++) {
          if (this.eduFormData[i].major !== event.major) {
            yourNewData.push(this.eduFormData[i]);
          }
        }
        this.eduFormData = [];
        for (let edu of yourNewData) {
          this.eduFormData.push({
            collegeName: edu.collegeName,
            major: edu.major,
            levelEdu: edu.levelEdu,
            toDate: edu.toDate,
            formDate: edu.formDate,
            gpa: edu.gpa,
            gpaCode: edu.gpaCode,
            projects: edu.projects,
            country: edu.country,
            state: edu.state,
            city: edu.city,
            zipcode: edu.zipcode,
          });
        }
      }
    }
    this.eduFormVisible = true;
  }

  eduFormSubmit(event: any) {
    this.loadingVisible = true;
    this.eduFormData.push(this.eduForm);
    localStorage.setItem(
      COMMON_MSG.educationForm,
      JSON.stringify(this.eduFormData)
    );
    localStorage.removeItem(COMMON_MSG.editEduData);
    window.location.reload();
    this.eduFormVisible = false;
    setTimeout(() => {
      this.loadingVisible = false;
    }, COMMON_MSG.setTimeout5000);
  }

  deleteEduForm(event: any) {
    this.loadingVisible = true;
    let yourNewData = [];
    for (let i = 0; i < this.eduFormData.length; i++) {
      if (this.eduFormData[i].levelEdu !== event.levelEdu) {
        yourNewData.push(this.eduFormData[i]);
      }
    }
    localStorage.setItem(COMMON_MSG.educationForm, JSON.stringify(yourNewData));
    this.eduDeletePopup = false;
    window.location.reload();
    setTimeout(() => {
      this.loadingVisible = false;
    }, COMMON_MSG.setTimeout5000);
  }

  eduValueChanged(event: any, text: string) {
    if (text === COMMON_MSG.collegeName) {
      this.eduForm.collegeName = event.value;
    } else if (text === COMMON_MSG.major) {
      this.eduForm.major = event.value;
    } else if (text === COMMON_MSG.levelEdu) {
      this.eduForm.levelEdu = event.value;
      this.dateRange(this.eduToMinDate);
    } else if (text === COMMON_MSG.formDate) {
      this.eduToMinDate = event;
      this.dateRange(event);
    } else if (text === COMMON_MSG.toDate) {
      this.eduFromMaxDate = event;
      this.eduForm.toDate = event;
    } else if (text === COMMON_MSG.gpa) {
      this.eduForm.gpa = event.value;
    } else if (text === COMMON_MSG.gpaCode) {
      this.eduForm.gpaCode = event.value;
      if (this.eduForm.gpaCode === COMMON_MSG.Float) {
        this.gpaCodeLength = 5;
      } else {
        this.gpaCodeLength = 3;
      }
    } else if (text === COMMON_MSG.projects) {
      this.eduForm.projects = event.value;
    } else if (text === COMMON_MSG.country) {
      this.eduForm.country = event.value;
    } else if (text === COMMON_MSG.states) {
      this.eduForm.state = event.value;
    } else if (text === COMMON_MSG.city) {
      this.eduForm.city = event.value;
    } else if (text === COMMON_MSG.zipcode) {
      this.eduForm.zipcode = event.value;
    }
  }
  dateRange(date: any) {
    if (this.eduForm.levelEdu === COMMON_MSG.Diploma) {
      this.fromDate = new Date(date.setFullYear(date.getFullYear() + 2));
      let reSet: any = new Date(date.setFullYear(date.getFullYear() - 2));
      this.eduForm.formDate = reSet;
    } else if (this.eduForm.levelEdu === COMMON_MSG.BachelorDegree) {
      this.fromDate = new Date(date.setFullYear(date.getFullYear() + 3));
      let reSet: any = new Date(date.setFullYear(date.getFullYear() - 3));
      this.eduForm.formDate = reSet;
    } else if (this.eduForm.levelEdu === COMMON_MSG.Masters) {
      this.fromDate = new Date(date.setFullYear(date.getFullYear() + 1));
      let reSet: any = new Date(date.setFullYear(date.getFullYear() - 1));
      this.eduForm.formDate = reSet;
    } else {
      this.eduForm.formDate = date;
    }
  }
  closeEduForm() {
    this.eduFormVisible = false;
    localStorage.removeItem(COMMON_MSG.editEduData);
    window.location.reload();
  }
  goToDeletePopup(e: any) {
    this.eduDeletePopup = true;
    this.eduCurrentDelete = e;
  }

  cancelEduDeletePopup() {
    this.eduDeletePopup = false;
  }

  backPage() {
    this.router.navigate(["/login/registration-details"]);
  }

  nextPage() {
    this.router.navigate(["/login/registration-preview"]);
  }

  toggleBackBtn() {
    this.backBtnTooltip = !this.backBtnTooltip;
  }
  toggleNextBtn() {
    this.nextBtnTooltip = !this.nextBtnTooltip;
  }
}
