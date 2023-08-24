import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Nr13FormComponent } from './nr13-form.component';

const routes: Routes = [
  {
    path: "",
    component: Nr13FormComponent 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Nr13FormRoutingModule { }
