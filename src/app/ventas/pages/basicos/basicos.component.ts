import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css']
})
export class BasicosComponent   {

   nombreLower : string = "ramiro javier";
   nombreUpper : string = "RAMIRO JAVIER";
   nombreCompleto : string = "RaMiRo JaViEr";

   fecha : Date = new Date();

   

}
