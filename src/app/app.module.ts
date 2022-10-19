import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes,RouterModule } from "@angular/router";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AddFlightComponent } from './add-flight/add-flight.component';
import { FormsModule } from "@angular/forms";

const appRoutes:Routes=[
  {
    path:"",component:AddFlightComponent
  }

]
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AddFlightComponent
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
