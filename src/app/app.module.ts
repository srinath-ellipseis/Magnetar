import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DevExtremeModuleModule} from './common/modules/dev-extreme.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { CommonComponentModule } from './common/common.module';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { CompanyModule } from './components/company/company.module';
import { LoginRegistrationModule } from './components/login-registration/login-registration.module';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    DevExtremeModuleModule,
    FontAwesomeModule,
    CommonComponentModule,
    LoginRegistrationModule,
    CompanyModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
