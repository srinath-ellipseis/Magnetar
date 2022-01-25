import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AttendanceRoutingModule } from './attendance-routing.module';
import { CommonComponentModule } from 'src/app/common/common.module';
import { DevExtremeModuleModule } from 'src/app/common/modules/dev-extreme.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AttendanceComponent } from './attendance/attendance.component';



@NgModule({
  declarations: [AttendanceComponent],
  imports: [
    CommonModule,
    AttendanceRoutingModule,
    CommonComponentModule,
    DevExtremeModuleModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class AttendanceModule { }
