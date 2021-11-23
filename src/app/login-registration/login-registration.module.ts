import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './login/login-page.component';
import {LoginRegistrationRoutingModule} from './login-registration.routing';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DevExtremeModuleModule} from '../common/modules/dev-extreme.module';
import { RegistrationDetailsComponent } from './registration/registration-details/registration-details.component';
import { RegistrationEduEmpComponent } from './registration/registration-edu-emp/registration-edu-emp.component';
import { RegistrationEmpComponent } from './registration/registration-emp/registration-emp.component';
import { RegistrationPreviewComponent } from './registration/registration-preview/registration-preview.component';



@NgModule({
  declarations: [
    LoginPageComponent,
    RegistrationDetailsComponent,
    RegistrationEduEmpComponent,
    RegistrationEmpComponent,
    RegistrationPreviewComponent
  ],
  imports: [
    CommonModule,
    LoginRegistrationRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    DevExtremeModuleModule
  ]
})
export class LoginRegistrationModule { }
