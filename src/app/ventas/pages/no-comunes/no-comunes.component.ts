import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styleUrls: ['./no-comunes.component.css'],
})
export class NoComunesComponent implements OnInit {
  // i18nSelect
  nombre: string = 'Javier';

  genero: string = 'masculino';

  invitacionMap = {
    masculino: 'invitarlo',
    femenino: 'invitarla',
  };

  clientes: string[] = [
    'Maria',
    'javier',
    'Maria',
    'javier',
    'Ramiro',
    'Maria',
    'javier',
    'Ramiro',
  ];

  clientesMap = {
    '=0': 'no tenemos ningun cliente esperando',
    '=1': 'tenemos un cliente esperando',
    '=2': 'tenemos 2 clientes esperando',
    other: 'tenemos # clientes esperando',
  };

  constructor() {}

  ngOnInit(): void {}

  cambiarGenero() {
    this.nombre = 'Maria';
    this.genero = 'femenino';
  }
  cambiarCliente() {
    this.clientes.pop();
  }
  agregarCliente() {
    this.clientes.push('Ramiro');
  }
  //key value pipe

  persona = {
    nombre: 'Maria Fernanda',
    edad: 19,
    direccion: 'Santiago Zacualuca'
  }

  heroes = [
    {
      nombre: 'Thor',
      power: 34445454
    },
    {
      nombre: 'IronMan',
      power: 34445454
    },
    {
      nombre: 'Hulk',
      power: 34445454
    }
  ]

  //async pipe

  // randomNumbers = interval(1000)
}
