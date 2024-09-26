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
      valor: 0
    },
    {
      nome: "DESTREZA",
      valor: 0
    },
    {
      nome: "CONSTITUIÇÃO",
      valor: 0
    },
    {
      nome: "INTELIGÊNCIA",
      valor: 0
    },
    {
      nome: "SABEDORIA",
      valor: 0
    },
    {
      nome: "CARISMA",
      valor: 0
    }

  ]
}
