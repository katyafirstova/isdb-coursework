import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//prime
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { IndexPageComponent } from './pages/index/index-page.component';
import {RippleModule} from "primeng/ripple";
import {RouterModule, Routes} from "@angular/router";
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/register/register.component';
import {FormsModule} from "@angular/forms";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {AuthInterceptor} from "./services/auth-inspector";
// import { ErrorNoticeComponent } from './components/error/error.component';
import { MainPageComponent } from './pages/main/main-page.component';
import {AuthGuardService} from "./services/auth-guard.service";
// import { InputAreaComponent } from './components/input-area/input-area.component';
// import { GraphComponent } from './components/graph/graph.component';
// import { ResultsTableComponent } from './components/results-table/results-table.component';
import {InputNumberModule} from "primeng/inputnumber";
import {SliderModule} from "primeng/slider";
import {TableModule} from "primeng/table";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatPaginatorModule} from "@angular/material/paginator";

const appRoutes: Routes =[
  { path: '', component: IndexPageComponent},
  { path: 'sign-in', component: LoginComponent},
  { path: 'sign-up', component: SignUpComponent},
  { path: 'main', component: MainPageComponent, canActivate: [AuthGuardService]}
];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IndexPageComponent,
    LoginComponent,
    SignUpComponent,
    MainPageComponent,
    // InputAreaComponent,
    // GraphComponent,
    // ResultsTableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    ButtonModule,
    RippleModule,
    InputTextModule,
    FormsModule,
    InputNumberModule,
    SliderModule,
    TableModule,
    BrowserAnimationsModule,
    MatPaginatorModule,
  ],
  providers: [
    AuthGuardService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
