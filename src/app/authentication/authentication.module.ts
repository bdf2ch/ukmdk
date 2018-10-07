import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { AuthenticationComponent } from './components/authentication/authentication.component';
import { AuthenticationRoutingModule } from './authentication-routing.module';


@NgModule({
  imports: [
    SharedModule,
    AuthenticationRoutingModule
  ],
  declarations: [SignInComponent, AuthenticationComponent]
})
export class AuthenticationModule { }
