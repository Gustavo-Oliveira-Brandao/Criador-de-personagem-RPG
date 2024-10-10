import { Component } from '@angular/core';
import { RollButtonComponent } from '../../components/roll-button/roll-button.component';
import { CharacterService } from '../../services/character.service';
import { ISkill } from '../../../../core/models/i-skill';
import { ExpandedTabControlService } from '../../services/expanded-tab-control.service';

@Component({
  selector: 'app-skills-attacks',
  standalone: true,
  imports: [RollButtonComponent],
  templateUrl: './skills-attacks.component.html',
  styleUrl: './skills-attacks.component.sass'
})
export class SkillsAttacksComponent {

  constructor(protected character: CharacterService, private readonly etc:ExpandedTabControlService) { }

  edit(skill : ISkill, index : number){
    this.etc.tab = "skill"
    this.etc.choosenSkill = skill
    this.etc.index = index
    this.etc.open()
  }

  addAttack(){
    this.etc.tab = "attack"
    this.etc.action = "add"
    this.etc.open()
  }
}




