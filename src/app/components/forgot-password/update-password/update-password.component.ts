import { Component, OnInit } from "@angular/core";
import { COMMON_MSG, Validation_MSG } from "src/app/common/messages/common-msg";

@Component({
  selector: "app-update-password",
  templateUrl: "./update-password.component.html",
  styleUrls: ["./update-password.component.css"],
})
export class UpdatePasswordComponent implements OnInit {
  COMMON_MSG = COMMON_MSG;
  error_msg = Validation_MSG;
  loadingVisible: boolean = true;
  btnDisable: boolean = false;
  constructor() {}

  ngOnInit(): void {}
  onShown() {
    setTimeout(() => {
      this.loadingVisible = false;
    }, COMMON_MSG.setTimeout2000);
  }
  ValueChanged(event: any) {}
  submit() {}
}
