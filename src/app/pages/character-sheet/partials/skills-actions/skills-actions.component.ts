import { Component } from '@angular/core';
import { RollButtonComponent } from '../../components/roll-button/roll-button.component';
import { CharacterService } from '../../services/character.service';
import { ISkill } from '../../../../core/models/i-skill';

@Component({
  selector: 'app-skills-actions',
  standalone: true,
  imports: [RollButtonComponent],
  templateUrl: './skills-actions.component.html',
  styleUrl: './skills-actions.component.sass'
})
export class SkillsActionsComponent {

  constructor(protected character:CharacterService){}

  editSkill(skill : ISkill){
    
  }
}




