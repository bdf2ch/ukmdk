import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardModule } from './dashboard/dashboard.module';
import { AuthenticationModule } from './authentication/authentication.module';

export const routes: Routes = [
  {
    path: '',
    loadChildren: './dashboard/dashboard.module#DashboardModule'
  },
  {
    path: 'signin',
    loadChildren: './authentication/authentication.module#AuthenticationModule'
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
