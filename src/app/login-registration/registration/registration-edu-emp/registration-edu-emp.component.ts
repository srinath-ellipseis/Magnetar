import { Component, OnInit } from "@angular/core";
import * as dayjs from "dayjs";
import { COMMON_MSG } from "../../../common/messages/common-msg";

@Component({
  selector: "app-registration-edu",
  templateUrl: "./registration-edu-emp.component.html",
  styleUrls: ["./registration-edu-emp.component.css"],
})
export class RegistrationEduEmpComponent implements OnInit {
  COMMON_MSG = COMMON_MSG;
  countries: any = ["USA", "UK", "Canada", "India"];
  states: any = ["Texas", "North London", "Andhra Pradesh", "British Columbia"];
  cities: any = ["Houston", "Austin", "Chittoor", "Tirupathi", "Vancouver"];
  levelEdu: any = [
    { id: 1, name: "Sophomore", disabled: false },
    { id: 2, name: "Bachelor", disabled: false },
    { id: 3, name: "Graduate", disabled: false },
    { id: 4, name: "PHD", disabled: false },
  ];
  empForm = {
    companyName: "",
    description: "",
    toDate: "",
    formDate: "",
    country: "",
    state: "",
    city: "",
    zipcode: "",
  };
  eduForm = {
    collegeName: "",
    major: "",
    levelEdu: "",
    toDate: "",
    formDate: "",
    gpa: "",
    country: "",
    state: "",
    city: "",
    zipcode: "",
  };
  loadingVisible: boolean = true;
  empFormVisible: boolean = false;
  eduFormVisible: boolean = false;
  empCurrentData: any;
  eduCurrentData: any;
  checked: boolean = false;
  empFormData: any[] = [];
  eduFormData: any[] = [];
  educationData: any[] = [];
  employeeData: any[] = [];
  eduFromMaxDate: any;
  eduToMinDate: any;
  empFromMaxDate: any;
  empToMinDate: any;
  eduDeletePopup: boolean = false;
  empDeletePopup: boolean = false;
  eduCurrentDelete: any;
  empCurrentDelete: any;
  eduFormDisable: boolean = false;
  empFormDisable: boolean = false;
  defaultVisible = false;
  viewTooltipVisible = false;
  editTooltipVisible = false;
  deleteTooltipVisible = false;
  constructor() {
    this.employeeData = JSON.parse(localStorage.getItem("employeeForm")!);
    this.educationData = JSON.parse(localStorage.getItem("educationForm")!);
    if (this.employeeData) {
      for (let emp of this.employeeData) {
        this.empFormData.push({
          companyName: emp.companyName,
          description: emp.description,
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
          toDate: edu.toDate,
          formDate: edu.formDate,
          gpa: edu.gpa,
          country: edu.country,
          state: edu.state,
          city: edu.city,
          zipcode: edu.zipcode,
        });
        if (edu.levelEdu === "Sophomore") {
          this.levelEdu[0].disabled = true;
        } else if (edu.levelEdu === "Bachelor") {
          this.levelEdu[1].disabled = true;
        } else if (edu.levelEdu === "Graduate") {
          this.levelEdu[2].disabled = true;
        } else if (edu.levelEdu === "PHD") {
          this.levelEdu[3].disabled = true;
        }
      }
    }
  }

  ngOnInit(): void {}

  onShown() {
    setTimeout(() => {
      this.loadingVisible = false;
    }, 2000);
  }

  onHidden() {}

  goToEmpForm(e: any, type: string) {
    if (e === "new") {
      this.empFormDisable = false;
      this.empCurrentData = "";
    } else {
      this.empCurrentData = e;
      if (type === "view") {
        this.empFormDisable = true;
      } else {
        this.empFormDisable = false;
      }
      if (this.empCurrentData) {
        this.empForm.companyName = this.empCurrentData.companyName;
        this.empForm.description = this.empCurrentData.description;
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
            description: emp.description,
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

  deleteEmpForm(e: any) {
    this.loadingVisible = true;
    let yourNewData = [];
    for (let i = 0; i < this.empFormData.length; i++) {
      if (this.empFormData[i].companyName !== e.companyName) {
        yourNewData.push(this.empFormData[i]);
      }
    }
    localStorage.setItem("employeeForm", JSON.stringify(yourNewData));
    this.empDeletePopup = false;
    window.location.reload();
    setTimeout(() => {
      this.loadingVisible = false;
    }, 5000);
  }

  empFormSubmit(e: any) {
    this.loadingVisible = true;
    this.empFormData.push(this.empForm);
    localStorage.setItem("employeeForm", JSON.stringify(this.empFormData));
    window.location.reload();
    this.empFormVisible = false;
    setTimeout(() => {
      this.loadingVisible = false;
    }, 5000);
  }

  empValueChanged(event: any, text: string) {
    if (text === "companyName") {
      this.empForm.companyName = event.value;
    } else if (text === "description") {
      this.empForm.description = event.value;
    } else if (text === "formDate") {
      this.empToMinDate = event.value;
      this.empForm.formDate = event.value;
    } else if (text === "toDate") {
      this.empFromMaxDate = event.value;
      this.empForm.toDate = event.value;
    } else if (text === "country") {
      this.empForm.country = event.value;
    } else if (text === "state") {
      this.empForm.state = event.value;
    } else if (text === "city") {
      this.empForm.city = event.value;
    } else if (text === "zipcode") {
      this.empForm.zipcode = event.value;
    }
  }
  closeEmpForm() {
    this.empFormVisible = false;
    window.location.reload();
  }
  goToEmpDeletePopup(e: any) {
    this.empDeletePopup = true;
    this.empCurrentDelete = e;
  }

  cancelEmpDeletePopup() {
    this.empDeletePopup = false;
  }

  goToEduForm(e: any, type: string) {
    if (e === "new") {
      this.eduFormDisable = false;
      this.eduCurrentData = "";
    } else {
      this.eduCurrentData = e;
      if (type === "view") {
        this.eduFormDisable = true;
      } else {
        this.eduFormDisable = false;
      }
      if (this.eduCurrentData) {
        this.eduForm.collegeName = e.collegeName;
        this.eduForm.major = e.major;
        this.eduForm.levelEdu = e.levelEdu;
        this.eduForm.formDate = e.formDate;
        this.eduForm.toDate = e.toDate;
        this.eduForm.gpa = e.gpa;
        this.eduForm.country = e.country;
        this.eduForm.state = e.state;
        this.eduForm.city = e.city;
        this.eduForm.zipcode = e.zipcode;

        this.eduToMinDate = e.formDate;
        this.eduFromMaxDate = e.toDate;
      }
      if (this.eduCurrentData) {
        let yourNewData = [];
        for (let i = 0; i < this.eduFormData.length; i++) {
          if (this.eduFormData[i].major !== e.major) {
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

  eduFormSubmit(e: any) {
    this.loadingVisible = true;
    this.eduFormData.push(this.eduForm);
    localStorage.setItem("educationForm", JSON.stringify(this.eduFormData));
    window.location.reload();
    this.eduFormVisible = false;
    setTimeout(() => {
      this.loadingVisible = false;
    }, 5000);
  }

  deleteEduForm(e: any) {
    this.loadingVisible = true;
    let yourNewData = [];
    for (let i = 0; i < this.eduFormData.length; i++) {
      if (this.eduFormData[i].levelEdu !== e.levelEdu) {
        yourNewData.push(this.eduFormData[i]);
      }
    }
    localStorage.setItem("educationForm", JSON.stringify(yourNewData));
    this.eduDeletePopup = false;
    window.location.reload();
    setTimeout(() => {
      this.loadingVisible = false;
    }, 5000);
  }

  eduValueChanged(event: any, text: string) {
    if (text === "collegeName") {
      this.eduForm.collegeName = event.value;
    } else if (text === "major") {
      this.eduForm.major = event.value;
    } else if (text === "levelEdu") {
      this.eduForm.levelEdu = event.value;
    } else if (text === "formDate") {
      this.eduToMinDate = event.value;
      this.eduForm.formDate = event.value;
    } else if (text === "toDate") {
      this.eduFromMaxDate = event.value;
      this.eduForm.toDate = event.value;
    } else if (text === "gpa") {
      this.eduForm.gpa = event.value;
    } else if (text === "country") {
      this.eduForm.country = event.value;
    } else if (text === "state") {
      this.eduForm.state = event.value;
    } else if (text === "city") {
      this.eduForm.city = event.value;
    } else if (text === "zipcode") {
      this.eduForm.zipcode = event.value;
    }
  }
  closeEduForm() {
    this.eduFormVisible = false;
    window.location.reload();
  }
  goToDeletePopup(e: any) {
    this.eduDeletePopup = true;
    this.eduCurrentDelete = e;
  }

  cancelEduDeletePopup() {
    this.eduDeletePopup = false;
  }
}
