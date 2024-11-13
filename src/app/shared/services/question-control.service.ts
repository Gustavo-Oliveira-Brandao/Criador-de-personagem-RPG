import { Injectable } from '@angular/core';
import { Fieldset } from '../../core/models/fieldset';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class QuestionControlService {

  constructor() { }

  toFormGroup(fieldsets : Fieldset<any>[]){
    const group : any = {}

    fieldsets.forEach((fieldset => {
      fieldset.questions.forEach((question) => {
        group[question.key] = question.required 
        ? new FormControl(question.value || '', Validators.required)
        : new FormControl(question.value || '')
      })
    }))
    const fb = new FormBuilder()
    return fb.nonNullable.group(group)
  }
}
