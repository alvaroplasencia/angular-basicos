import { Component } from '@angular/core';

@Component({
    selector: 'app-contador',
    template: `
    <h1>{{title}}</h1>
    <h2>La base es <strong>{{base}}</strong></h2>
    <button (click)="modifyPrice(-base);">- {{base}}</button>
    <span>{{price}}</span>
    <button (click)="modifyPrice(base);">+ {{base}}</button>
    `
})
export class ContadorComponent {
    title: string = 'Primer template';
    price: number = 0;
    base: number = 5;

    modifyPrice(value: number) {
        this.price = this.price + value;
    }
}
