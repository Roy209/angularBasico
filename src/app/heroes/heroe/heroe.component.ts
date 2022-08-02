import { Component } from "@angular/core";


@Component({
  selector : 'app-heroe',
  templateUrl : './heroe.component.html'
})
export class HeroeComponent{
  nombre: string = "Paty Cantu";
  edad:number = 35;


  get nombreCaptalizado(){
    return this.nombre.toUpperCase();
  }

  obtenerNombre():string {
    return `Nombre: ${this.nombre}  Edad:${this.edad}`;
  }

  cambiarNombre():void{
    this.nombre = "Patricia"
  }

  cambiarEdad():void{
    this.edad = 32;
  }



}
