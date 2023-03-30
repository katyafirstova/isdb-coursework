import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./auth/login/login.component";
import {RegisterComponent} from "./auth/register/register.component";
import {MainPageComponent} from "./pages/main-page/main-page.component";
import {HeaderComponent} from "./header/header.component";
import {RegisterSuccessComponent} from "./auth/register-success/register-success.component";

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent },
  { path: 'main', component: MainPageComponent},
  { path: 'register-success', component: RegisterSuccessComponent},
  {path: '', component: HeaderComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
