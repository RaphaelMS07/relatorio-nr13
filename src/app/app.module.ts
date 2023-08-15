import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PrintLayoutNr13Component } from './print-layout-nr13/print-layout-nr13.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PrintLayoutNr13Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
