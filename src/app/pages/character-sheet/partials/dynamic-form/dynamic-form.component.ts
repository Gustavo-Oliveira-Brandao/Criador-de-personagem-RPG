import { Component, Input, OnInit } from '@angular/core';
import { DynamicFormQuestionComponent } from "../../../../shared/components/dynamic-form-question/dynamic-form-question.component";
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { QuestionBase } from '../../../../core/models/question-base';
import { QuestionControlService } from '../../../../shared/services/question-control.service';
import { QuestionService } from '../../../../shared/services/question.service';

@Component({
  selector: 'app-dynamic-form',
  standalone: true,
  imports: [DynamicFormQuestionComponent, ReactiveFormsModule],
  templateUrl: './dynamic-form.component.html',
  styleUrl: './dynamic-form.component.sass'
})
export class DynamicFormComponent implements OnInit {
  @Input() questions: QuestionBase<string>[] | null = []
  form !: FormGroup
  payload = ""

  constructor(private qcs : QuestionControlService, private qs : QuestionService){}
  onSubmit(){
    this.payload = JSON.stringify(this.form.getRawValue())
    
    this.qs.isFormOpened = false
  }

  ngOnInit(): void {
      this.form = this.qcs.toFormGroup(this.questions as QuestionBase<string>[])
  }
}
