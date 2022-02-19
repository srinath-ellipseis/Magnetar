import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  SimpleChange,
} from "@angular/core";
import {
  COMMON_MSG,
  DropdownValues,
  Validation_MSG,
} from "../../messages/common-msg";

@Component({
  selector: "app-mobile-number",
  templateUrl: "./mobile-number.component.html",
  styleUrls: ["./mobile-number.component.css"],
})
export class MobileNumberComponent implements OnInit {
  COMMON_MSG = COMMON_MSG;
  error_msg = Validation_MSG;
  @Input() mobileNumberValue: any;
  @Input() countryCode: any;
  @Output() changeValue = new EventEmitter();
  @Output() codeValue = new EventEmitter();
  countryCodes = DropdownValues.countryCodes;
  phonePattern: any = /^(?!0+$)\d{8,}$/;

  constructor() {}

  ngOnInit(): void {}
  ngOnChanges(change: SimpleChange) {
    if (this.countryCode) {
      this.countryCode = this.countryCode;
    } else {
      this.countryCode = "+91";
      this.codeValue.emit(this.countryCode);
    }
  }
  codeValueChange(event: any) {
    this.countryCode = event.value;
    this.codeValue.emit(this.countryCode);
  }
  valueChanged(event: any) {
    this.mobileNumberValue = event.value;
    this.changeValue.emit(this.mobileNumberValue);
  }
}
