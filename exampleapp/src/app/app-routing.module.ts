import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { AuthenticationGuardService} from './authentication-guard.service';
import { DeactivateGuardService } from './deactivate-guard.service';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: 'home',
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: ':id',
        canActivate: [AuthenticationGuardService],
        component: HomeComponent
      }
    ]
  }, {
    path: 'login',
    canDeactivate: [DeactivateGuardService],
    component: LoginComponent
  }, {
    path: 'signup',
    component: SignupComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
