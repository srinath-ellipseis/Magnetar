import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BankingAndFinancialComponent } from "./banking-and-financial/banking-and-financial.component";
import { CableAndWireComponent } from "./cable-and-wire/cable-and-wire.component";
import { EducationComponent } from "./education/education.component";
import { HealthCareComponent } from "./health-care/health-care.component";
import { InsuranceComponent } from "./insurance/insurance.component";
import { ManufacturingComponent } from "./manufacturing/manufacturing.component";
import { MediaComponent } from "./media/media.component";
import { OilAndGasComponent } from "./oil-and-gas/oil-and-gas.component";
import { SportsComponent } from "./sports/sports.component";
import { TelecomComponent } from "./telecom/telecom.component";
const routes: Routes = [
  {
    path: "oil-gas",
    component: OilAndGasComponent,
  },
  {
    path: "education",
    component: EducationComponent,
  },
  {
    path: "health-care",
    component: HealthCareComponent,
  },
  {
    path: "insurance",
    component: InsuranceComponent,
  },
  {
    path: "banking-financial",
    component: BankingAndFinancialComponent,
  },
  {
    path: "manufacturing",
    component: ManufacturingComponent,
  },
  {
    path: "telecom",
    component: TelecomComponent,
  },
  {
    path: "cable-wire",
    component: CableAndWireComponent,
  },
  {
    path: "sports",
    component: SportsComponent,
  },
  {
    path: "media-entertainment",
    component: MediaComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IndustriesRoutingModule {}
