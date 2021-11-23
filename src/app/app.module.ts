import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {LoginRegistrationModule} from './login-registration/login-registration.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DevExtremeModuleModule} from './common/modules/dev-extreme.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginRegistrationModule,
    ReactiveFormsModule,
    FormsModule,
    DevExtremeModuleModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
