import { Injectable } from '@angular/core';
import { FormField } from '../core/models/form-field';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormControlService {

  toFormGroup(questions: FormField<string>[]){
    const group : any = {}

    questions.forEach((question) => {
      group[question.key] = question.required
      ? new FormControl(question.value ?? '', Validators.required)
      : new FormControl(question.value ?? '')
    })
    return new FormGroup(group)
  }
}
