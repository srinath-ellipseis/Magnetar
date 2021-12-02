import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-registration-preview",
  templateUrl: "./registration-preview.component.html",
  styleUrls: ["./registration-preview.component.css"],
})
export class RegistrationPreviewComponent implements OnInit {
  loadingVisible: boolean = true;
  detailsData: any;
  educationData: any[];
  employeeData: any[];
  backBtnTooltip: boolean = false;
  constructor(private router: Router) {
    this.educationData = JSON.parse(localStorage.getItem("educationForm")!);
    this.employeeData = JSON.parse(localStorage.getItem("employeeForm")!);
    this.detailsData = JSON.parse(localStorage.getItem("detailsForm")!);
  }

  ngOnInit(): void {}
  
  onShown() {
    setTimeout(() => {
      this.loadingVisible = false;
    }, 2000);
  }

  onHidden() {}

  goToDetailsPage() {
    this.router.navigate(["/registration-details"]);
  }
  goToEduEmpPage() {
    this.router.navigate(["/registration-edu-emp"]);
  }
  editEduForm(data: any) {
    localStorage.setItem("editEduData", JSON.stringify(data));
    this.goToEduEmpPage();
  }
  editEmpForm(data: any) {
    localStorage.setItem("editEmpData", JSON.stringify(data));
    this.goToEduEmpPage();
  }
  backPage() {
    this.goToEduEmpPage();
  }
  toggleBackBtn() {
    this.backBtnTooltip = !this.backBtnTooltip;
  }
}
