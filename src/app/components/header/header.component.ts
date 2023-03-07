import { Component } from '@angular/core';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  show = false;

  constructor( private service : ServiceService ) {};

  openLoginRegister() {
    this.service.showLoginRegister();
  }

}
