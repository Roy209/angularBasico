import { Component } from "@angular/core";

@Component({
  selector: 'app-contador',
  template:`
    <h1>{{title}}</h1>
    <button (click)="acumular(base)">+{{base}}</button>
    <h1>{{ contador }}</h1>
    <button (click)="acumular(-base)">-{{base}}</button>

  `
})
export class ContadorComponent {
  title:string = 'COntador';
  contador:number = 10;
  base:number = 3;

  acumular(valor:number){
    this.contador+=valor;
  }

}
