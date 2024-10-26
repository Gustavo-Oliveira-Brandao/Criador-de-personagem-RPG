import {Component, Input} from '@angular/core';
import { RollButtonComponent } from '../../components/roll-button/roll-button.component';
import { CharacterService } from '../../services/character.service';
import {RpgCharacter} from "../../../../core/models/character";

@Component({
  selector: 'app-skills-attacks',
  standalone: true,
  imports: [RollButtonComponent],
  templateUrl: './skills-attacks.component.html',
  styleUrl: './skills-attacks.component.sass'
})
export class SkillsAttacksComponent {

  constructor() { }
  @Input() character: RpgCharacter | null = null
}




