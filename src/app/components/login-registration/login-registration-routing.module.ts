import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ForgotComponent } from "./forgot/forgot.component";
import { LoginComponent } from "./login/login.component";
import { RegistrationDetailsComponent } from "./registration-details/registration-details.component";
import { RegistrationEduEmpComponent } from "./registration-edu-emp/registration-edu-emp.component";
import { RegistrationPreviewComponent } from "./registration-preview/registration-preview.component";
import { RegistrationComponent } from "./registration/registration.component";
import { SecurityQuestionsComponent } from "./security-questions/security-questions.component";
const routes: Routes = [
  {
    path: "login-page",
    component: LoginComponent,
  },
  {
    path: "registration",
    component: RegistrationComponent,
  },
  {
    path: "registration-details",
    component: RegistrationDetailsComponent,
  },
  {
    path: "registration-edu-emp",
    component: RegistrationEduEmpComponent,
  },
  {
    path: "registration-preview",
    component: RegistrationPreviewComponent,
  },
  {
    path: "forgot",
    component: ForgotComponent,
  },
  {
    path: "security",
    component: SecurityQuestionsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginRegistrationRoutingModule {}
