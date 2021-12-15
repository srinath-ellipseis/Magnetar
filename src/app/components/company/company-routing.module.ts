import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { CareersComponent } from './careers/careers.component';
import { ServicesComponent } from './services/services.component';
const routes: Routes = [
  {
    path: 'about',
    component: AboutUsComponent
  },
  {
    path: 'careers',
    component: CareersComponent
  },
  {
    path: 'services',
    component: ServicesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyRoutingModule { }
