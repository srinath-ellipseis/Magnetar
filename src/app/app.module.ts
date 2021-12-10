import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {LoginRegistrationModule} from './login-registration/login-registration.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DevExtremeModuleModule} from './common/modules/dev-extreme.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { CommonComponentModule } from './common/common.module';
import { CommonModule } from '@angular/common';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    LoginRegistrationModule,
    ReactiveFormsModule,
    FormsModule,
    DevExtremeModuleModule,
    FontAwesomeModule,
    CommonComponentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
