import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { IndexComponent } from './main/index/index.component';

const routes: Routes = [
  { path: "index", component: IndexComponent, pathMatch: "full"},
  { path: "**", redirectTo:"index" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
