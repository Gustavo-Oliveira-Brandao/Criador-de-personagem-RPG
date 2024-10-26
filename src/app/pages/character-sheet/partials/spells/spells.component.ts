import {Component, Input} from '@angular/core';
import {RpgCharacter} from "../../../../core/models/character";

@Component({
  selector: 'app-spells',
  standalone: true,
  imports: [],
  templateUrl: './spells.component.html',
  styleUrl: './spells.component.sass'
})
export class SpellsComponent {
  @Input() character: RpgCharacter | null = null
}
