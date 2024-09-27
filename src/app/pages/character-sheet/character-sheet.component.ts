import { Component } from '@angular/core';
import { DetailsComponent } from "./partials/details/details.component";
import { StatusComponent } from "./partials/status/status.component";
import { AttributesComponent } from "./partials/attributes/attributes.component";
import { SecondaryStatusComponent } from "./partials/secondary-status/secondary-status.component";
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { SkillsActionsComponent } from "./partials/skills-actions/skills-actions.component";
import { AsyncPipe } from '@angular/common';
import { DynamicFormComponent } from "./partials/dynamic-form/dynamic-form.component";
import { Observable } from 'rxjs';
import { QuestionBase } from '../../core/models/question-base';
import { QuestionService } from '../../shared/services/question.service';

@Component({
  selector: 'app-character-sheet',
  standalone: true,
  imports: [AsyncPipe, DetailsComponent, StatusComponent, AttributesComponent, SecondaryStatusComponent, RouterOutlet, SkillsActionsComponent, RouterLink, RouterLinkActive, DynamicFormComponent],
  templateUrl: './character-sheet.component.html',
  styleUrl: './character-sheet.component.sass'
})
export class CharacterSheetComponent {

  questions$ : Observable<QuestionBase<any>[]>

  constructor(service : QuestionService){
    this.questions$ = service.getQuestions()
  }

}
