import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
import { ComponentsModule } from '../components/components.module';
import { ListadoComponent } from './listado/listado.component';



@NgModule({
  declarations: [
    IndexComponent,
    ListadoComponent
  ],
  exports: [
    IndexComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule
  ]
})
export class PagesModule { }
