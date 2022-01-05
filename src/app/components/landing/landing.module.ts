import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingDashboardComponent } from './landing-dashboard/landing-dashboard.component';
import { LandingRoutingModule } from './landing-routing.module';
import { DevExtremeModuleModule } from 'src/app/common/modules/dev-extreme.module';
import { CommonComponentModule } from 'src/app/common/common.module';
import { HolidaysListComponent } from './holidays-list/holidays-list.component';



@NgModule({
  declarations: [
    LandingDashboardComponent,
    HolidaysListComponent
  ],
  imports: [
    CommonModule,
    LandingRoutingModule,
    CommonComponentModule,
    DevExtremeModuleModule,
  ]
})
export class LandingModule { }
