import { Component } from '@angular/core';
import { RollButtonComponent } from '../../components/roll-button/roll-button.component';
import { CharacterService } from '../../services/character.service';
import { ISkill } from '../../../../core/models/i-skill';
import { QuestionBase } from '../../../../core/models/question-base';
import { DropdownQuestion } from '../../../../core/models/dropdown-question';
import { TextboxQuestion } from '../../../../core/models/textbox-question';
import { QuestionService } from '../../../../shared/services/question.service';

@Component({
  selector: 'app-skills-actions',
  standalone: true,
  imports: [RollButtonComponent],
  templateUrl: './skills-actions.component.html',
  styleUrl: './skills-actions.component.sass'
})
export class SkillsActionsComponent {

  constructor(protected character:CharacterService, protected qs : QuestionService){}

  editSkill(skill : ISkill, index : number){
    this.qs.renderQuestions("skill", index)
    this.qs.displayItem = skill
    this.qs.openForm()
  }
}




