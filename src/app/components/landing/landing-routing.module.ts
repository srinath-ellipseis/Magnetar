import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HolidaysListComponent } from "./holidays-list/holidays-list.component";

const routes: Routes = [
  {
    path: "holidays-list",
    component: HolidaysListComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LandingRoutingModule {}
