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
  departmentArray: Department[] = [];
  submitedData: Department = {};
  departmentData: Department[] = [];
  sameName: boolean = false;
  constructor() {
    this.departmentCallback = this.departmentCallback.bind(this);
    this.departmentData = JSON.parse(
      localStorage.getItem(COMMON_MSG.departments)!
    );
    if (this.departmentData) {
      for (let dep of this.departmentData) {
        this.departmentArray.push({
          id: dep.id,
          name: dep.name,
        });
      }
    }
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
    this.departmentArray.push(this.submitedData);
    localStorage.setItem(
      COMMON_MSG.departments,
      JSON.stringify(this.departmentArray)
    );
    window.location.reload();
    this.isVisible = true;
  }
  departmentCallback(event: any) {
    if (this.departmentData) {
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
}
