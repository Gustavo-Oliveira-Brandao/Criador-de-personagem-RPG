import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RollButtonComponent } from "../../components/roll-button/roll-button.component";
import { AttributeComponent } from '../../components/attribute/attribute.component';

@Component({
  selector: 'app-secondary-status',
  standalone: true,
  imports: [FormsModule, RollButtonComponent, AttributeComponent],
  templateUrl: './secondary-status.component.html',
  styleUrl: './secondary-status.component.sass'
})
export class SecondaryStatusComponent {

  speed:number = 30
  perception:number = 10

  testes = [
    {
      name: "FORTITUDE",
      value: 10
    },
    {
      name: "REFLEXOS",
      value: 10
    },
    {
      name: "VONTADE",
      value: 10
    }
  ]
}
