import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import { ListadoComponent } from './pages/listado/listado.component';

const routes: Routes = [
  { path: "index", component: IndexComponent, pathMatch: "full"},
  { path: "listado", component: ListadoComponent },
  { path: "**", redirectTo:"index" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
