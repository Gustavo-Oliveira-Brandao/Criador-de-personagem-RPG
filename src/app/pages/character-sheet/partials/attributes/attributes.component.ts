import {Component, Input} from '@angular/core';
import { SmallerContainerWithDiceRollComponent } from '../../components/smaller-container-with-dice-roll/smaller-container-with-dice-roll.component';

import { CharacterService } from '../../services/character.service';
import {RpgCharacter} from "../../../../core/models/character";

@Component({
  selector: 'app-attributes',
  standalone: true,
  imports: [SmallerContainerWithDiceRollComponent],
  templateUrl: './attributes.component.html',
  styleUrl: './attributes.component.sass'
})
export class AttributesComponent {

  @Input() character: RpgCharacter | null = null
  constructor(){}

}
