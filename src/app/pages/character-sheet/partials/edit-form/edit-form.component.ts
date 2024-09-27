import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FormField } from '../../../../core/models/form-field';
import { FormControlService } from '../../../../shared/form-control.service';
import { FormQuestionComponent } from '../../../../shared/form-question/form-question.component';

@Component({
  selector: 'app-edit-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, FormQuestionComponent],
  templateUrl: './edit-form.component.html',
  styleUrl: './edit-form.component.sass'
})
export class EditFormComponent implements OnInit {

  @Input() questions: FormField<string>[] | null = []

  form !: FormGroup
  payload = ''

  constructor(private formControlService : FormControlService){}

  ngOnInit(){
    this.form = this.formControlService.toFormGroup(this.questions as FormField<string>[])
  }

  onSubmit(){
    this.payload = JSON.stringify(this.form.getRawValue())
    console.log(this.payload)
  }
}
