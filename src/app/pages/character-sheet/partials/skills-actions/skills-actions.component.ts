import { Component } from '@angular/core';
import { RollButtonComponent } from '../../components/roll-button/roll-button.component';
import { CharacterService } from '../../services/character.service';
import { EditTabControlService } from '../../services/edit-tab-control.service';

@Component({
  selector: 'app-skills-actions',
  standalone: true,
  imports: [RollButtonComponent],
  templateUrl: './skills-actions.component.html',
  styleUrl: './skills-actions.component.sass'
})
export class SkillsActionsComponent {

  constructor(protected character:CharacterService, private editTab : EditTabControlService){}

  edit(){
    this.editTab.openTab="skills"
  }
}




