import { Component, Input } from '@angular/core';
import { RollButtonComponent } from "../roll-button/roll-button.component";

@Component({
  selector: 'app-attribute',
  standalone: true,
  imports: [RollButtonComponent],
  templateUrl: './attribute.component.html',
  styleUrl: './attribute.component.sass'
})
export class AttributeComponent {

  @Input() nome:string = ""
  @Input() valor:number = 0
}
