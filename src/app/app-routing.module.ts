import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { 
    path: '',
    component: DashboardComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent, pathMatch: 'full' },
      { path: 'contactus', component: ContactUsComponent},
      {
        path: 'login',
        loadChildren: () =>import('./components/login-registration/login-registration.module').then((m) => m.LoginRegistrationModule)
      },
      {
        path: 'company',
        loadChildren: () =>import('./components/company/company.module').then((m) => m.CompanyModule)
      },
      {
        path: 'industries',
        loadChildren: () =>import('./components/industries/industries.module').then((m) => m.IndustriesModule)
      },
      {
        path: 'applications',
        loadChildren: () =>import('./components/applications/applications.module').then((m) => m.ApplicationsModule)
      },
      {
        path: 'partners',
        loadChildren: () =>import('./components/partners/partners.module').then((m) => m.PartnersModule)
      }
    ]
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
