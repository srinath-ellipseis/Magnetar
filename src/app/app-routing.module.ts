import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { 
    path: '',
    component: DashboardComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent, pathMatch: 'full' },
      {
        path: 'login',
        loadChildren: () =>import('./components/login-registration/login-registration.module').then((m) => m.LoginRegistrationModule)
      },
      {
        path: 'company',
        loadChildren: () =>import('./components/company/company.module').then((m) => m.CompanyModule)
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
