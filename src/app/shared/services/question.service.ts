import { Injectable } from '@angular/core';
import { QuestionBase } from '../../core/models/question-base';
import { DropdownQuestion } from '../../core/models/dropdown-question';
import { TextboxQuestion } from '../../core/models/textbox-question';
import { Observable, of } from 'rxjs';
import { CharacterService } from '../../pages/character-sheet/services/character.service';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  questions: QuestionBase<string>[] = []
  isFormOpened = false
  displayItem : any
  questions$: Observable<QuestionBase<any>[]>

  
  constructor(private character : CharacterService) {
    this.questions$ = this.getQuestions()
  }

  openForm(){
    this.isFormOpened = false

    this.isFormOpened = true
  }

  attributeQuestions: QuestionBase<string>[] = [
    new TextboxQuestion({
      key: "attributeBonus",
      label: "Bônus do atributo",
      value: "",
      type: "number",
      required: false
    })
  ]

  skillQuestions: QuestionBase<string>[] = [
    new DropdownQuestion({
      key: "skillAttribute",
      label: "Atributo da perícia",
      options: [
        {
          key: "forca", value: "Força"
        },
        {
          key: "destreza", value: "Destreza"
        },
        {
          key: "constituicao", value: "Constituição"
        },
        {
          key: "inteligencia", value: "Inteligência"
        },
        {
          key: "sabedoria", value: "Sabedoria"
        },
        {
          key: "carisma", value: "Carisma"
        }
      ],
      order: 1
    }),

    new TextboxQuestion({
      key: "skillBonus",
      label: "Bônus da perícia",
      value: "",
      type: "number",
      required: true,
      order: 2
    })
  ]


  renderQuestions(form: string, index : number) {
    if (form == "attribute"){
      this.attributeQuestions[0].value = String(this.character.attributes[index].value)
      console.log(this.attributeQuestions[0].value)
      this.questions = this.attributeQuestions
    }
    if (form == "skill") {
      this.skillQuestions[0].value = String(this.character.skills[index].value)
      this.questions = this.skillQuestions
    }

    this.questions$ = this.getQuestions()
  }

  getQuestions() {
    return of(this.questions.sort((a, b) => a.order - b.order))
  }
}
