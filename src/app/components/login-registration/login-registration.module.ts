import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './login/login-page.component';
import {LoginRegistrationRoutingModule} from './login-registration.routing';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RegistrationDetailsComponent } from './registration/registration-details/registration-details.component';
import { RegistrationEduEmpComponent } from './registration/registration-edu-emp/registration-edu-emp.component';
import { RegistrationPreviewComponent } from './registration/registration-preview/registration-preview.component';
import { DevExtremeModuleModule } from 'src/app/common/modules/dev-extreme.module';
import { CommonComponentModule } from 'src/app/common/common.module';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [
    LoginPageComponent,
    RegistrationDetailsComponent,
    RegistrationEduEmpComponent,
    RegistrationPreviewComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    LoginRegistrationRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    DevExtremeModuleModule,
    CommonComponentModule,

  ]
})
export class LoginRegistrationModule { }
