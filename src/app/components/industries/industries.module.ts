import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { OilAndGasComponent } from "./oil-and-gas/oil-and-gas.component";
import { EducationComponent } from "./education/education.component";
import { HealthCareComponent } from "./health-care/health-care.component";
import { InsuranceComponent } from "./insurance/insurance.component";
import { BankingAndFinancialComponent } from "./banking-and-financial/banking-and-financial.component";
import { IndustriesRoutingModule } from "./industries.routing";
import { ManufacturingComponent } from "./manufacturing/manufacturing.component";
import { TelecomComponent } from "./telecom/telecom.component";
import { CableAndWireComponent } from "./cable-and-wire/cable-and-wire.component";
import { SportsComponent } from "./sports/sports.component";
import { MediaComponent } from "./media/media.component";

@NgModule({
  declarations: [
    OilAndGasComponent,
    EducationComponent,
    HealthCareComponent,
    InsuranceComponent,
    BankingAndFinancialComponent,
    ManufacturingComponent,
    TelecomComponent,
    CableAndWireComponent,
    SportsComponent,
    MediaComponent,
  ],
  imports: [CommonModule, IndustriesRoutingModule],
})
export class IndustriesModule {}
