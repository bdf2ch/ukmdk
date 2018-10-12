import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { AuthenticationComponent } from './components/authentication/authentication.component';
import {AuthenticationGuard} from './guards/authentication.guard';

export const routes: Routes = [
  {
    path: '',
    component: AuthenticationComponent,
    canActivateChild: [
      AuthenticationGuard
    ],
    children: [
      {
        path: '',
        component: SignInComponent
      },
      {
        path: '**',
        redirectTo: '',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AuthenticationRoutingModule {}
