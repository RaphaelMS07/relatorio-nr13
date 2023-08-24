import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    loadChildren: () => import("./home/home.module").then((m) => m.HomeModule)
  },
  {
    path: 'print-page',
    loadChildren: () => import("./print-layout-nr13/print-layout-nr13.module").then((m) => m.PrintLayoutNr13Module)
  },
  {
    path: 'form',
    loadChildren: () => import("./nr13-form/nr13-form.module").then((m) => m.Nr13FormModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
