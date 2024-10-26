import {Component, Input} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RollButtonComponent } from "../../components/roll-button/roll-button.component";
import { AttributeComponent } from '../../components/attribute/attribute.component';

import { CharacterService } from '../../services/character.service';
import {RpgCharacter} from "../../../../core/models/character";

@Component({
  selector: 'app-secondary-status',
  standalone: true,
  imports: [FormsModule, RollButtonComponent, AttributeComponent],
  templateUrl: './secondary-status.component.html',
  styleUrl: './secondary-status.component.sass'
})
export class SecondaryStatusComponent {

  constructor(){

  }

  @Input() character: RpgCharacter | null = null


}
