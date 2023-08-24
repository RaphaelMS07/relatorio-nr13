import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PrintLayoutNr13Component } from './print-layout-nr13/print-layout-nr13.component';
import { Nr13FormComponent } from './nr13-form/nr13-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PrintLayoutNr13Component,
    Nr13FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
