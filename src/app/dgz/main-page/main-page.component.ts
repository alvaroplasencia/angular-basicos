import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';



@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent {


  personajes: Personaje[] = [
    {
      nombre: "Goku",
      poder: 15000
    },
    {
      nombre: "Vegeta",
      poder: 777
    }
  ];

  
  nuevo: Personaje = {
    nombre: "",
    poder: 0
  }
  agregar():void {
    if (this.nuevo.nombre.trim().length != 0) {
      console.log("filtro");
      this.personajes.push(this.nuevo);

      //purgamos el valor
      this.nuevo = {
        nombre: "",
        poder: 0
      }
    }
    console.log(this.nuevo);
  }


}
