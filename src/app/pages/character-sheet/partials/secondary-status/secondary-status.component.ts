import {Component, Input} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RollButtonComponent } from "../../components/roll-button/roll-button.component";
import { SmallerContainerWithDiceRollComponent } from '../../components/smaller-container-with-dice-roll/smaller-container-with-dice-roll.component';

import { CharacterService } from '../../services/character.service';
import {RpgCharacter} from "../../../../core/models/character";

@Component({
  selector: 'app-secondary-status',
  standalone: true,
  imports: [FormsModule, RollButtonComponent, SmallerContainerWithDiceRollComponent],
  templateUrl: './secondary-status.component.html',
  styleUrl: './secondary-status.component.sass'
})
export class SecondaryStatusComponent {

  constructor(){

  }

  @Input() character: RpgCharacter | null = null


}
