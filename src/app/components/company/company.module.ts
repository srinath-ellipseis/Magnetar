import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutUsComponent } from './about-us/about-us.component';
import { CareersComponent } from './careers/careers.component';
import { CompanyRoutingModule } from './company-routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DevExtremeModuleModule } from 'src/app/common/modules/dev-extreme.module';
import { CommonComponentModule } from 'src/app/common/common.module';
import { ServicesComponent } from './services/services.component';



@NgModule({
  declarations: [
    AboutUsComponent,
    CareersComponent,
    ServicesComponent
  ],
  imports: [
    CommonModule,
    CompanyRoutingModule,
  ]
})
export class CompanyModule { }
