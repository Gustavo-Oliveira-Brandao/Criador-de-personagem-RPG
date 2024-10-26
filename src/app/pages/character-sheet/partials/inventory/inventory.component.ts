import {Component, Input} from '@angular/core';
import {RpgCharacter} from "../../../../core/models/character";

@Component({
  selector: 'app-inventory',
  standalone: true,
  imports: [],
  templateUrl: './inventory.component.html',
  styleUrl: './inventory.component.sass'
})
export class InventoryComponent {

  @Input() character: RpgCharacter | null = null
}
