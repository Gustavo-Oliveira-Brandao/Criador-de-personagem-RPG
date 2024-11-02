import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RollButtonComponent } from "../roll-button/roll-button.component";

@Component({
  selector: 'app-modular-card',
  standalone: true,
  imports: [FormsModule, RollButtonComponent],
  templateUrl: './modular-card.component.html',
  styleUrl: './modular-card.component.sass'
})
export class ModularCardComponent {

  @Input() title : string = ""
  @Input() img : string = ""
  @Input() hasRoll : boolean = false

  value = 0
}
