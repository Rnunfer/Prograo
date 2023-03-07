import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  @Output() mostrarLoginRegister = new EventEmitter<boolean>();

  constructor() { }

  showLoginRegister() {
    this.mostrarLoginRegister.emit();
  }


}
