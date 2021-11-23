import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {
  DxAccordionModule,
  DxButtonModule,
  DxCheckBoxModule,
  DxDateBoxModule,
  DxFormModule, DxListModule, DxLoadIndicatorModule, DxLoadPanelModule, DxNumberBoxModule, DxPopupModule, DxScrollViewModule,
  DxSelectBoxModule, DxSliderModule, DxTagBoxModule, DxTemplateModule,
  DxTextBoxModule, DxTooltipModule, DxValidationSummaryModule, DxValidatorModule
} from 'devextreme-angular';
@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    DxButtonModule,
    DxTextBoxModule,
    DxFormModule,
    DxFormModule,
    DxSelectBoxModule,
    DxCheckBoxModule,
    DxDateBoxModule,
    DxValidatorModule,
    DxValidationSummaryModule,
    DxAccordionModule,
    DxSliderModule,
    DxTagBoxModule,
    DxTemplateModule,
    DxLoadIndicatorModule,
    DxLoadPanelModule,
    DxPopupModule,
    DxScrollViewModule,
    DxListModule,
    DxNumberBoxModule,
    DxTooltipModule
  ],
  exports: [
    DxButtonModule,
    DxTextBoxModule,
    DxFormModule,
    DxFormModule,
    DxSelectBoxModule,
    DxCheckBoxModule,
    DxDateBoxModule,
    DxValidatorModule,
    DxValidationSummaryModule,
    DxAccordionModule,
    DxSliderModule,
    DxTagBoxModule,
    DxTemplateModule,
    DxLoadIndicatorModule,
    DxLoadPanelModule,
    DxPopupModule,
    DxScrollViewModule,
    DxListModule,
    DxNumberBoxModule,
    DxTooltipModule
  ],
  providers: [],
  bootstrap: []
})
export class DevExtremeModuleModule { }
