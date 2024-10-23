import { Component } from '@angular/core';
import { RollButtonComponent } from '../../components/roll-button/roll-button.component';
import { CharacterService } from '../../services/character.service';

@Component({
  selector: 'app-skills-attacks',
  standalone: true,
  imports: [RollButtonComponent],
  templateUrl: './skills-attacks.component.html',
  styleUrl: './skills-attacks.component.sass'
})
export class SkillsAttacksComponent {

  constructor(protected character: CharacterService) { }

}




