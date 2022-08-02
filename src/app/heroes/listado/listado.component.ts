import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {

  heroes:string[] = ['SpiderMan','Iroman','Batman','Logan','Won'];
  heroeBorrado:string = '';
  // isborrado:boolean = false;

  deleteHeore():void{
    this.heroeBorrado = this.heroes.shift() || '';
    // if(this.heroeBorrado) this.isborrado = true;
  }

}
