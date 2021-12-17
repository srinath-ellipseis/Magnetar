import { Component, OnInit } from "@angular/core";
import { COMMON_MSG } from "src/app/common/messages/common-msg";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.css"],
})
export class FooterComponent implements OnInit {
  COMMON_MSG = COMMON_MSG;
  constructor() {}

  ngOnInit(): void {}
}
