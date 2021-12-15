import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutUsComponent } from './about-us/about-us.component';
import { CareersComponent } from './careers/careers.component';
import { ServicesComponent } from './services/services.component';
import { CompanyRoutingModule } from './company-routing.module';



@NgModule({
  declarations: [
    AboutUsComponent,
    CareersComponent,
    ServicesComponent
  ],
  imports: [
    CommonModule,
    CompanyRoutingModule
  ]
})
export class CompanyModule { }
