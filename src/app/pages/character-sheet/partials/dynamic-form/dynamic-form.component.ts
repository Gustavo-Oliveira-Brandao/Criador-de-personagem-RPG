import { Component, Input, OnInit } from '@angular/core';
import { DynamicFormQuestionComponent } from "../../../../shared/components/dynamic-form-question/dynamic-form-question.component";
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { QuestionBase } from '../../../../core/models/question-base';
import { QuestionControlService } from '../../../../shared/services/question-control.service';

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

  constructor(private qcs : QuestionControlService){}
  onSubmit(){
    console.log("form: " + this.questions)
  }

  ngOnInit(): void {
      this.form = this.qcs.toFormGroup(this.questions as QuestionBase<string>[])
  }
}
