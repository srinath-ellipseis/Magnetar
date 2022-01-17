import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DepartmentComponent } from "./department/department.component";
import { EmployeeComponent } from "./employee/employee.component";
import { StandupStatusComponent } from "./standup-status/standup-status.component";
import { ScrumRoutingModule } from "./scrum-routing.module";
import { DevExtremeModuleModule } from "src/app/common/modules/dev-extreme.module";
import { CommonComponentModule } from "src/app/common/common.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    DepartmentComponent,
    EmployeeComponent,
    StandupStatusComponent,
  ],
  imports: [
    CommonModule,
    ScrumRoutingModule,
    CommonComponentModule,
    DevExtremeModuleModule,
    ReactiveFormsModule,
    FormsModule,
  ],
})
export class ScrumModule {}
