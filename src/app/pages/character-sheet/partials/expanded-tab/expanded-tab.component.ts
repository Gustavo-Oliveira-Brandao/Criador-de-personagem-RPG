import { Component } from '@angular/core';
import { ExpandedTabControlService } from '../../services/expanded-tab-control.service';
import { DynamicFormComponent } from "../../../../shared/components/dynamic-form/dynamic-form.component";
import { IFormData } from '../../../../core/models/i-form-data';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CharacterService } from '../../services/character.service';

@Component({
  selector: 'app-expanded-tab',
  standalone: true,
  imports: [DynamicFormComponent],
  templateUrl: './expanded-tab.component.html',
  styleUrl: './expanded-tab.component.sass'
})
export class ExpandedTabComponent {

  constructor(protected etc : ExpandedTabControlService, private character : CharacterService){

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
  
  questions : IFormData[] = []

  toFormGroup(questions : IFormData[]){
    const group: any = {}

    questions.forEach((question) => {
      group[question.key] = question.required
      ? new FormControl(question.value || '', Validators.required)
      : new FormControl(question.value || '')
    })
    return new FormGroup(group)
  }

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

  attrQuestions : IFormData[] = [
    {
      key: "attrName",
      label: "nome do atributo: ",
      value: this.etc.choosenAttr.name,
      type: "text",
      controlType: "input",
      required: true
    },
    {
      key: "attrValue",
      label: "valor do atributo: ",
      value: this.etc.choosenAttr.value,
      type: "number",
      controlType: "input",
      required: true
    },
    {
      key: "attrBonus",
      label: "bônus do atributo: ",
      value: this.etc.choosenAttr.bonus,
      type: "number",
      controlType: "input",
      required: true
    }
  ]

  skillQuestions: IFormData[] = [
    {
      key: "skillName",
      label: "nome da pericia: ",
      value: this.etc.choosenSkill.name,
      type: "text",
      controlType: "input",
      required: true
    },
    {
      key: "skillValue",
      label: "valor da pericia: ",
      value: this.etc.choosenSkill.value,
      type: "number",
      controlType: "input",
      required: true
    },
    {
      key: "skillTraining",
      label: "treinamento: ",
      value: this.etc.choosenSkill.training,
      type: "text",
      controlType: "dropdown",
      required: true,
      options: this.trainingData
    },
    {
      key: "skillAttr",
      label: "Atributo: ",
      value: this.etc.choosenSkill.attribute,
      type: "text",
      controlType: "dropdown",
      required: true,
      options: this.attrData
    }
  ]
}
