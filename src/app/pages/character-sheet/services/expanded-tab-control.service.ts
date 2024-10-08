import { Injectable } from '@angular/core';
import { IAttack } from '../../../core/models/i-attack';
import { ISpell } from '../../../core/models/i-spell';
import { ISkill } from '../../../core/models/i-skill';
import { IAttribute } from '../../../core/models/i-attribute';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CharacterService } from './character.service';
import { IFormData } from '../../../core/models/i-form-data';

@Injectable({
  providedIn: 'root'
})
export class ExpandedTabControlService {

  constructor(private character: CharacterService) {

  }

  tab: string = ""
  isOpened: boolean = false
  title: string = ""
  category: string = ""
  action: string = ""
  choosenAttack !: IAttack
  choosenSpell !: ISpell
  choosenSkill : ISkill = this.character.skills[0]
  choosenAttr : IAttribute = this.character.attributes[0]
  index : number = 0

  choosenFormData: any
  choosenForm !: FormGroup

  questions: IFormData[] = []

  payload = ""

  open() {
    this.isOpened = false
    setTimeout(() => {
      this.isOpened = true
    }, 1);
    console.log(this.choosenSkill)
    console.log(this.choosenForm)
    
  }

  onSubmit = () => {
    this.payload = this.choosenForm.getRawValue()
    console.log(this.payload)
  }

  
  attrData = [
    {
      key: "forca",
      value: "Força"
    },
    {
      key: "destreza",
      value: "Destreza"
    },
    {
      key: "constituicao",
      value: "Constituição"
    },
    {
      key: "inteligencia",
      value: "Inteligência"
    },
    {
      key: "sabedoria",
      value: "Sabedoria"
    },
    {
      key: "carisma",
      value: "Carisma"
    }
  ]

  trainingData = [
    {
      key: "destreinado",
      value: "Destreinado"
    },
    {
      key: "treinado",
      value: "Treinado"
    }
  ]

  detailsQuestions : IFormData[] = [
    {
      key: "charName",
      label: "nome do personagem: ",
      type: "text",
      controlType: "input",
      value: this.character.details.name,
      required: true
    },
    {
      key: "charRace",
      label: "raça: ",
      type: "text",
      controlType: "input",
      value: this.character.details.race,
      required: true
    },
    {
      key: "charClass",
      label: "classe: ",
      type: "text",
      controlType: "input",
      value: this.character.details.class,
      required: true
    },
    {
      key: "charBackground",
      label: "origem: ",
      type: "text",
      controlType: "input",
      value: this.character.details.origin,
      required: true
    },
    {
      key: "charDivinity",
      label: "Divindade: ",
      type: "text",
      controlType: "input",
      value: this.character.details.divinity,
      required: true
    },
    {
      key: "charLevel",
      label: "nivel: ",
      type: "number",
      controlType: "input",
      value: this.character.details.level,
      required: true
    }
  ]

  get attrQuestions(){
    const attrQuestions : IFormData[] = [
      {
        key: "attrName",
        label: "nome do atributo: ",
        value: this.choosenAttr.name || "",
        type: "text",
        controlType: "input",
        required: true
      },
      {
        key: "attrValue",
        label: "valor do atributo: ",
        value: this.choosenAttr.value || "",
        type: "number",
        controlType: "input",
        required: true
      },
      {
        key: "attrBonus",
        label: "bônus do atributo: ",
        value: this.choosenAttr.bonus || "",
        type: "number",
        controlType: "input",
        required: true
      }
    ]
  return attrQuestions
  }

  get skillQuestions(){
    const skillQuestions: IFormData[] = [
      {
        key: "skillName",
        label: "nome da pericia: ",
        value: this.choosenSkill.name || "",
        type: "text",
        controlType: "input",
        required: true
      },
      {
        key: "skillValue",
        label: "valor da pericia: ",
        value: this.choosenSkill.value || "",
        type: "number",
        controlType: "input",
        required: true
      },
      {
        key: "skillTraining",
        label: "treinamento: ",
        value: this.choosenSkill.training || "",
        type: "text",
        controlType: "dropdown",
        required: true,
        options: this.trainingData
      },
      {
        key: "skillAttr",
        label: "Atributo: ",
        value: this.choosenSkill.attribute || "",
        type: "text",
        controlType: "dropdown",
        required: true,
        options: this.attrData
      }
    ]
    return skillQuestions
  }

  toFormGroup(questions : IFormData[]){
    const group: any = {}

    questions.forEach((question) => {
      group[question.key] = question.required
      ? new FormControl(question.value || '', Validators.required)
      : new FormControl(question.value || '')
    })
    return new FormGroup(group)
  }
}
