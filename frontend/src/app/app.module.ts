import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {ButtonModule} from 'primeng/button';
import {SliderModule} from "primeng/slider";
import {InputTextModule} from 'primeng/inputtext';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {RegisterComponent} from './auth/register/register.component';
import {RegisterSuccessComponent} from './auth/register-success/register-success.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './auth/login/login.component';
import {NgxWebstorageModule} from 'ngx-webstorage';
import { FormComponent } from './components/form/form.component';
import { Points } from './model/point/point.component';
import { PointService } from './services/point.service';
import {HeaderComponent} from './header/header.component'
import {InputNumberModule} from "primeng/inputnumber";
import  {RadiusService} from './services/radius.service';
import { IndexPageComponent } from './pages/index-page/index-page.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import {AuthGuardService} from "./guard/auth-guard.service";
import {GraphComponent} from "./components/graph/graph.component";
import {HashLocationStrategy, LocationStrategy} from "@angular/common";
import {AuthInterceptor} from "./services/auth-inspector";
import { TableComponent } from './components/table/table/table.component';
import {TableModule} from "primeng/table";


@NgModule({
  declarations: [
    AppComponent,
    GraphComponent,
    RegisterComponent,
    RegisterSuccessComponent,
    LoginComponent,
    HeaderComponent,
    FormComponent,
    IndexPageComponent,
    MainPageComponent,
    TableComponent,
    // HomeComponent,
    // AddPostComponent,
    // PostComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        InputTextModule,
        FormsModule,
        InputNumberModule,
        SliderModule,
        FormsModule,
        ReactiveFormsModule,
        NgxWebstorageModule.forRoot(),
        HttpClientModule,
        TableModule,

    ],
  providers: [{provide: HTTP_INTERCEPTORS,  useClass: AuthInterceptor, multi: true},  AuthGuardService,
 {provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]

})

export class AppModule {

}
