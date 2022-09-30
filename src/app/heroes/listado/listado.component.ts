import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  heroes: string[] = ["Spiderman","Thor", "IronMan"]
  historicoHeroeBorrado?: string ;

  borrarHeroe(): void{
    this.historicoHeroeBorrado=this.heroes.pop();
    console.log(this.historicoHeroeBorrado);
  }
}
