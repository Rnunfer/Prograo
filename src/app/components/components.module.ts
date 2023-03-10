import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { AnimatedSearchComponent } from './animated-search/animated-search.component';
import { PrograoDescriptionComponent } from './prograo-description/prograo-description.component';
import { LoginRegisterComponent } from './login-register/login-register.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    AnimatedSearchComponent,
    PrograoDescriptionComponent,
    LoginRegisterComponent
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    AnimatedSearchComponent,
    PrograoDescriptionComponent,
    LoginRegisterComponent,
    RouterModule
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
