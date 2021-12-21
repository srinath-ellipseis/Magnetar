import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
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
  constructor() {
    let date = new Date();
    this.dobMaxDate = new Date(
      date.setFullYear(date.getFullYear() - COMMON_MSG.dobAgeLimit)
    );
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
}
