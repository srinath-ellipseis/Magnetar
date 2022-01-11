import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { EduDetails } from "src/app/models/login.model";
import { COMMON_MSG, Validation_MSG } from "../../messages/common-msg";

@Component({
  selector: "app-date-box",
  templateUrl: "./date-box.component.html",
  styleUrls: ["./date-box.component.css"],
})
export class DateBoxComponent implements OnInit {
  COMMON_MSG = COMMON_MSG;
  error_msg = Validation_MSG;
  @Input() datePatchValue: any;
  @Input() dobDatePatchValue: any;
  @Input() placeholder: string = COMMON_MSG.dobPlaceholder;
  @Input() statDateValidation: boolean = false;
  @Input() endDateValidation: boolean = false;
  @Input() dobValidation: boolean = false;
  @Input() startDate: any;
  @Input() isDisable: boolean = false;
  @Output() dateValue = new EventEmitter();
  todayDate = new Date();
  dobMaxDate = new Date();
  compareDate: boolean = true;
  eduFormData: EduDetails[] = [];
  educationData: EduDetails[] = [];
  constructor() {
    let date = new Date();
    this.dobMaxDate = new Date(
      date.setFullYear(date.getFullYear() - COMMON_MSG.dobAgeLimit)
    );
    this.dateCompare = this.dateCompare.bind(this);
    this.educationData = JSON.parse(
      localStorage.getItem(COMMON_MSG.educationForm)!
    );
    if (this.educationData) {
      for (let edu of this.educationData) {
        this.eduFormData.push({
          id: edu.id,
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
      }
    }
  }

  ngOnInit(): void {}
  valueChanged(event: any) {
    if (this.dobValidation) {
      this.datePatchValue = new Date(event.value);
      this.dateValue.emit(event.value);
    } else {
      this.datePatchValue = event.value;
      this.dateValue.emit(event.value);
    }
  }
  dateCompare(event: any) {
    let startDate, checkDate, endDate;
    checkDate = event.value.getTime();
    if (this.eduFormData.length > 0) {
      for (let date of this.eduFormData) {
        endDate = date.toDate.getTime();
        startDate = date.formDate.getTime();
        if (startDate <= checkDate && endDate >= checkDate) {
          this.compareDate = false;
          break;
        } else {
          this.compareDate = true;
        }
      }
    } else {
      this.compareDate = true;
    }
    return this.compareDate;
  }
}
