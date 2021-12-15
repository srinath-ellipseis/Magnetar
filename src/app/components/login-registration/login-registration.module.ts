import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { RegistrationDetailsComponent } from './registration-details/registration-details.component';
import { RegistrationEduEmpComponent } from './registration-edu-emp/registration-edu-emp.component';
import { RegistrationPreviewComponent } from './registration-preview/registration-preview.component';
import { LoginRegistrationRoutingModule } from './login-registration-routing';
import { CommonComponentModule } from 'src/app/common/common.module';
import { DevExtremeModuleModule } from 'src/app/common/modules/dev-extreme.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    LoginComponent,
    RegistrationComponent,
    RegistrationDetailsComponent,
    RegistrationEduEmpComponent,
    RegistrationPreviewComponent
  ],
  imports: [
    CommonModule,
    LoginRegistrationRoutingModule,
    CommonComponentModule,
    DevExtremeModuleModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class LoginRegistrationModule { }
