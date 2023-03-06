import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { AnimatedSearchComponent } from './animated-search/animated-search.component';
import { PrograoDescriptionComponent } from './prograo-description/prograo-description.component';



@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    AnimatedSearchComponent,
    PrograoDescriptionComponent
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    AnimatedSearchComponent,
    PrograoDescriptionComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
