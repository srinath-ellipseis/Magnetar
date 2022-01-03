import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MailVerificationComponent } from "./mail-verification/mail-verification.component";
import { SecurityAnswersComponent } from "./security-answers/security-answers.component";
import { UpdatePasswordComponent } from "./update-password/update-password.component";
const routes: Routes = [
  {
    path: "security-answer",
    component: SecurityAnswersComponent,
  },
  {
    path: "mail-verification",
    component: MailVerificationComponent,
  },
  {
    path: "update-password",
    component: UpdatePasswordComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ForgotRoutingModule {}
