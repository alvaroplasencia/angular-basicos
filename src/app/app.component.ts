import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title: string = 'Primer template';
  price: number = 0;
  base: number = 5;

  modifyPrice(value: number){
    this.price= this.price + value;
  }
}
