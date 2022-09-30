import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dgz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})
export class AgregarComponent {

  @Input()
  nuevo: Personaje = {
    nombre: "",
    poder: 0
  }

  constructor(private dbzService: DbzService) {
  }

  agregar(): void {
    if (this.nuevo.nombre.trim().length != 0) {
      console.log(this.nuevo);

      this.dbzService.agregarPersonaje(this.nuevo);

      //purgamos el valor
      this.nuevo = {
        nombre: "",
        poder: 0
      }
    }

  }

}
