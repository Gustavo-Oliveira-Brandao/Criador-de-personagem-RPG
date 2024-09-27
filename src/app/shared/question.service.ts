import { Injectable } from '@angular/core';
import { FormField } from '../core/models/form-field';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  questions: FormField<string>[] = []

  
}
