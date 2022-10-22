import { Component, OnInit } from '@angular/core';
import { Color, Heroe } from '../../interfaces/ventas.interface';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styleUrls: ['./ordenar.component.css'],
})
export class OrdenarComponent {

  mayusculas: boolean = true;
  ordenarPor: string = ''

  cambiarVariable() {
    this.mayusculas = !this.mayusculas;
  }

  heroes: Heroe[] =[
    {
        nombre : 'Thor',
        vuela: true,
        color: Color.naranja
    },
    {
      nombre : 'Batman',
      vuela: false,
      color: Color.negro
  },
  {
    nombre : 'Spiderman',
    vuela: true,
    color: Color.amarrillo
},
{
  nombre : 'Ironman',
  vuela: true,
  color: Color.verde
}
  ]

  cambiarOrden(valor : string){
    console.log(valor);
    this.ordenarPor = valor;
  }

}
