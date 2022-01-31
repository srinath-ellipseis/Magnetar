import { Component, OnInit } from "@angular/core";
import { COMMON_MSG, Validation_MSG } from "src/app/common/messages/common-msg";
import { Department } from "src/app/models/scrum.model";

@Component({
  selector: "app-department",
  templateUrl: "./department.component.html",
  styleUrls: ["./department.component.css"],
})
export class DepartmentComponent implements OnInit {
  COMMON_MSG = COMMON_MSG;
  error_Msg = Validation_MSG;
  departmenName: string = "";
  isVisible: boolean = false;
  submitedData: Department = {};
  departmentData: Department[] = [];
  sameName: boolean = false;
  formVisible: boolean = false;
  deletePopup: boolean = false;
  currentDelete: any;
  isDisable: boolean = false;
  constructor() {
    this.departmentCallback = this.departmentCallback.bind(this);
    this.departmentData = JSON.parse(
      localStorage.getItem(COMMON_MSG.departments)!
    );
  }

  ngOnInit(): void {}
  valueChanged(event: any) {
    this.departmenName = event.value.toUpperCase();
  }
  submit() {
    let newId = Math.floor(Math.random() * (1000000 - 100000) + 100000);
    this.submitedData = {
      id: newId,
      name: this.departmenName,
    };
    if (this.departmentData) {
      this.departmentData.push(this.submitedData);
    } else {
      this.departmentData = [];
      this.departmentData.push(this.submitedData);
    }

    localStorage.setItem(
      COMMON_MSG.departments,
      JSON.stringify(this.departmentData)
    );
    window.location.reload();
    this.isVisible = true;
  }
  departmentCallback(event: any) {
    if (this.departmentData.length != 0) {
      for (let dep of this.departmentData) {
        if (event.value === dep.name) {
          this.sameName = false;
          break;
        } else {
          this.sameName = true;
        }
      }
      return this.sameName;
    } else {
      return true;
    }
  }
  goToDeletePopup(event: any) {
    this.deletePopup = true;
    this.currentDelete = event;
  }
  goToForm(event: any, text: string) {
    this.formVisible = true;
    if (text === "view") {
      this.departmenName = event.name;
      this.isDisable = true;
    } else if (text === "edit") {
      this.departmenName = event.name;
      let yourNewData = [];
      for (let i = 0; i < this.departmentData.length; i++) {
        if (this.departmentData[i].id !== event.id) {
          yourNewData.push(this.departmentData[i]);
        }
      }
      if (yourNewData) {
        this.departmentData = [];
        this.departmentData = yourNewData;
      }
    }
  }
  closeForm() {
    this.formVisible = false;
    window.location.reload();
  }
  cancelDeletePopup() {
    this.deletePopup = false;
  }
  deleteForm(event: any) {
    let yourNewData = [];
    for (let i = 0; i < this.departmentData.length; i++) {
      if (this.departmentData[i].id !== event.id) {
        yourNewData.push(this.departmentData[i]);
      }
    }
    if (yourNewData.length != 0) {
      localStorage.setItem(COMMON_MSG.departments, JSON.stringify(yourNewData));
    } else {
      localStorage.removeItem(COMMON_MSG.departments);
    }
    window.location.reload();
  }
}
