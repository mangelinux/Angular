import { Component } from "@angular/core";

@Component({
    selector: "app-contador",
    template: `
    
    <h1>{{titulo}}</h1>
    <h2>La base es {{base}}</h2>
    <button (click)="(operacion(+base));">+{{base}}</button>
    <span> {{numero}} </span>
    <button (click)="(operacion(-base));">-{{base}}</button>
    
    `
})

export class ContadorComponent {
    titulo: string = 'Contador App';
    numero: number = 20;
    base: number = 5;
  
    operacion(valor: number) {
      this.numero += valor;
    }
}