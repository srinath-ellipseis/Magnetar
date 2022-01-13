import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DepartmentComponent } from "./department/department.component";
import { EmployeeComponent } from "./employee/employee.component";
import { StandupStatusComponent } from "./standup-status/standup-status.component";

const routes: Routes = [
  {
    path: "department",
    component: DepartmentComponent,
  },
  {
    path: "employee",
    component: EmployeeComponent,
  },
  {
    path: "standup-status",
    component: StandupStatusComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ScrumRoutingModule {}
