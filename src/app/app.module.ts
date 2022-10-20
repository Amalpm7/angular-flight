import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes,RouterModule } from "@angular/router";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AddFlightComponent } from './add-flight/add-flight.component';
import { FormsModule } from "@angular/forms";
import { ViewFlightComponent } from './view-flight/view-flight.component';
import { HttpClientModule,HttpClient } from "@angular/common/http";
import { SearchComponent } from './search/search.component';

const appRoutes:Routes=[
  {
    path:"",component:AddFlightComponent
  },
  {
    path:"view",component:ViewFlightComponent
  },
  {
    path:"search",component:SearchComponent
  }

]
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AddFlightComponent,
    ViewFlightComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
