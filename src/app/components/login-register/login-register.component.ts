import { Component, Input, OnInit } from '@angular/core';
import { ServiceService } from '../../service.service';

@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.css']
})
export class LoginRegisterComponent implements OnInit {

  show = false;

  constructor ( private service : ServiceService ) {}

  ngOnInit(): void {
    this.service.mostrarLoginRegister.subscribe( () => {
      this.show = true;
      document.body.classList.add('no-scroll');
      this.show = true;
    })
  }

}