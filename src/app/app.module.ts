import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes,RouterModule } from "@angular/router";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AddFlightComponent } from './add-flight/add-flight.component';
import { FormsModule } from "@angular/forms";
import { ViewFlightComponent } from './view-flight/view-flight.component';

const appRoutes:Routes=[
  {
    path:"",component:AddFlightComponent
  },
  {
    path:"view",component:ViewFlightComponent
  }

]
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AddFlightComponent,
    ViewFlightComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
