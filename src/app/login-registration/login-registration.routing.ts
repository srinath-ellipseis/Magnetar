import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginPageComponent} from './login/login-page.component';
import {RegistrationDetailsComponent} from './registration/registration-details/registration-details.component';
import {RegistrationEduEmpComponent} from './registration/registration-edu-emp/registration-edu-emp.component';
import {RegistrationPreviewComponent} from './registration/registration-preview/registration-preview.component';

const routes: Routes = [
  {
    path: '',
    component: LoginPageComponent
  },
  {
    path: 'registration-details',
    component: RegistrationDetailsComponent
  },
  {
    path: 'registration-edu-emp',
    component: RegistrationEduEmpComponent
  },
  {
    path: 'registration-preview',
    component: RegistrationPreviewComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class LoginRegistrationRoutingModule { }
