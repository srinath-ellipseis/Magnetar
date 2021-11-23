import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // { path: '',   redirectTo: '/login', pathMatch: 'full' },
  {
    path: 'login',
    loadChildren: () =>import('./login-registration/login-registration.module').then((m) => m.LoginRegistrationModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
