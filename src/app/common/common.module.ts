import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { DevExtremeModuleModule } from "../common/modules/dev-extreme.module";
import { InputPasswordComponent } from "./components/input-password/input-password.component";

@NgModule({
  declarations: [InputPasswordComponent],
  exports: [InputPasswordComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DevExtremeModuleModule,
  ],
})
export class CommonComponentModule {}
