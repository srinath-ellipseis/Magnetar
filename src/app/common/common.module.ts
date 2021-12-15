import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { DevExtremeModuleModule } from "../common/modules/dev-extreme.module";
import { InputPasswordComponent } from "./components/input-password/input-password.component";
import { MobileNumberComponent } from './components/mobile-number/mobile-number.component';

@NgModule({
  declarations: [InputPasswordComponent, MobileNumberComponent],
  exports: [InputPasswordComponent, MobileNumberComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DevExtremeModuleModule,
  ],
})
export class CommonComponentModule {}
