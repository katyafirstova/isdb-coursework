import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./auth/login/login.component";
import {RegisterComponent} from "./auth/register/register.component";
import {MainPageComponent} from "./pages/main-page/main-page.component";
import {HeaderComponent} from "./header/header.component";
import {AuthGuardService} from "./guard/auth-guard.service";

const routes: Routes = [
  { path: 'login', component: LoginComponent, canActivate: [AuthGuardService]},
  { path: 'register', component: RegisterComponent, canActivate: [AuthGuardService]},
  { path: 'main', component: MainPageComponent},
  {path: '', component: HeaderComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
