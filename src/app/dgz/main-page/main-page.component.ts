import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dgz.service';



@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent {

  nuevo: Personaje = {
    nombre: "",
    poder: 0
  }


  agregarNuevoPersonaje(personaje: Personaje) {
  }

  constructor() { 
  }

}
