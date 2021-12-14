import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"],
})
export class NavbarComponent implements OnInit {
  
  constructor(private router: Router) {}

  ngOnInit(): void {}
  clearForms() {
    localStorage.removeItem("deatilsForm");
    localStorage.removeItem("eductionForm");
    localStorage.removeItem("employeeForm");
  }
  itemClick(event: any) {
    console.log(event.itemData.name);
    if (event.itemData.name === "HD Video Player") {
      this.router.navigate(["company/about"]);
    }
  }
}
