import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { RegistrationDetailsComponent } from "./registration-details/registration-details.component";
import { RegistrationEduEmpComponent } from "./registration-edu-emp/registration-edu-emp.component";
import { RegistrationPreviewComponent } from "./registration-preview/registration-preview.component";
import { RegistrationComponent } from "./registration/registration.component";
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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginRegistrationRoutingModule {}
