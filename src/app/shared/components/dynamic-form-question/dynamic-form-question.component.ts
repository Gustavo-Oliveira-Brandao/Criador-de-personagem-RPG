import { Component, Input } from '@angular/core';
import { QuestionBase } from '../../../core/models/question-base';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-dynamic-form-question',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './dynamic-form-question.component.html',
  styleUrl: './dynamic-form-question.component.sass'
})
export class DynamicFormQuestionComponent {

  @Input() question !: QuestionBase<string>

  @Input() form !: FormGroup

}
