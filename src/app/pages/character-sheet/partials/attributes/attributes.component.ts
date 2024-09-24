import { Component } from '@angular/core';

@Component({
  selector: 'app-attributes',
  standalone: true,
  imports: [],
  templateUrl: './attributes.component.html',
  styleUrl: './attributes.component.sass'
})
export class AttributesComponent {

  atributos = [
    {
      nome: "FORÇA",
      valor: 10
    },
    {
      nome: "DESTREZA",
      valor: 10
    },
    {
      nome: "CONSTITUIÇÃO",
      valor: 10
    },
    {
      nome: "INTELIGÊNCIA",
      valor: 10
    },
    {
      nome: "SABEDORIA",
      valor: 10
    },
    {
      nome: "CARISMA",
      valor: 10
    }

  ]
}
