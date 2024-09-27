import { Component } from '@angular/core';
import { RollButtonComponent } from '../../components/roll-button/roll-button.component';
import { FormField } from '../../../../core/models/form-field';
import { TextboxQuestion } from '../../../../core/models/textbox-question';
import { DropdownQuestion } from '../../../../core/models/dropdown-question';
import { QuestionService } from '../../../../shared/question.service';
import { CharacterService } from '../../services/character.service';

@Component({
  selector: 'app-skills-actions',
  standalone: true,
  imports: [RollButtonComponent],
  templateUrl: './skills-actions.component.html',
  styleUrl: './skills-actions.component.sass'
})
export class SkillsActionsComponent {

  constructor (private questionService : QuestionService, protected character : CharacterService){}

  editSkill(name:string){
    const questions: FormField<string>[] = [
      new DropdownQuestion({
        key: "skillTraining",
        label: "Treinamento",
        options: [
          {key : 'destreinado', value: "Destreinado"},
          {key : 'treinado' , value : 'Treinado'}
        ],
        order: 1
      }),
  
      new TextboxQuestion({
        key: "skillBonus",
        label: "Bônus",
        value: "0",
        type: "number",
        required: false,
        order: 2
      })
    ]
    questions.sort((a, b) => a.order - b.order)
  
    this.questionService.questions = questions
  
  }



}
