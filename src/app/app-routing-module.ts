import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Summary } from './summary/summary';
import { Dashboard } from './dashboard/dashboard';

const routes: Routes = [
  {path: 'dashboard', component: Dashboard, title: 'Weather Dashboard'},
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
