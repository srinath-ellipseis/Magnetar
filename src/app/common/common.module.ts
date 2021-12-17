import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { DevExtremeModuleModule } from "../common/modules/dev-extreme.module";
import { InputPasswordComponent } from "./components/input-password/input-password.component";
import { MobileNumberComponent } from './components/mobile-number/mobile-number.component';
import { DateBoxComponent } from './components/date-box/date-box.component';

@NgModule({
  declarations: [InputPasswordComponent, MobileNumberComponent, DateBoxComponent],
  exports: [InputPasswordComponent, MobileNumberComponent, DateBoxComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DevExtremeModuleModule,
  ],
})
export class CommonComponentModule {}
