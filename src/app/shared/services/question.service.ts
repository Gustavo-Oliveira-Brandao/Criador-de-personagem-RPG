import { Injectable } from '@angular/core';
import { QuestionBase } from '../../core/models/question-base';
import { DropdownQuestion } from '../../core/models/dropdown-question';
import { TextboxQuestion } from '../../core/models/textbox-question';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor() { }

  getQuestions(){
    const questions : QuestionBase<string>[] = [
      new DropdownQuestion({
        key: "teste",
        label: "Teste",
        options: [
          {
            key: "teste1", value: "teste 1"
          },
          {
            key: "teste2", value: "teste 2"
          }
        ],
        order: 1
      }),

      new TextboxQuestion({
        key: "uhul",
        label: "Uhul",
        value: "",
        required: true,
        order: 2
      })
    ]

    return of(questions.sort((a, b) => a.order - b.order))
  }
}
