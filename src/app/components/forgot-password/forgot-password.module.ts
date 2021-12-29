import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CommonComponentModule } from "src/app/common/common.module";
import { DevExtremeModuleModule } from "src/app/common/modules/dev-extreme.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ForgotRoutingModule } from "./forgot-routing.module";
import { MailVerificationComponent } from "./mail-verification/mail-verification.component";
import { SecurityAnswersComponent } from "./security-answers/security-answers.component";
import { UpdatePasswordComponent } from "./update-password/update-password.component";

@NgModule({
  declarations: [
    MailVerificationComponent,
    SecurityAnswersComponent,
    UpdatePasswordComponent,
  ],
  imports: [
    CommonModule,
    ForgotRoutingModule,
    CommonComponentModule,
    DevExtremeModuleModule,
    ReactiveFormsModule,
    FormsModule,
  ],
})
export class ForgotPasswordModule {}
