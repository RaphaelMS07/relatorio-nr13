import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrintLayoutNr13Component } from './print-layout-nr13.component';

const routes: Routes = [
  {
    path: '',
    component: PrintLayoutNr13Component
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrintLayoutNr13RoutingModule { }
