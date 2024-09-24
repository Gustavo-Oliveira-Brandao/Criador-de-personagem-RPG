import { Component } from '@angular/core';
import { AttributeComponent } from '../../components/attribute/attribute.component';

@Component({
  selector: 'app-attributes',
  standalone: true,
  imports: [AttributeComponent],
  templateUrl: './attributes.component.html',
  styleUrl: './attributes.component.sass'
})
export class AttributesComponent {

  atributos = [
    {
      nome: "FORÇA",
      valor: 35
    },
    {
      nome: "DESTREZA",
      valor: 10
    },
    {
      nome: "CONSTITUIÇÃO",
      valor: 35
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
