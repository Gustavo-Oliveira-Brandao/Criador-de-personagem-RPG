import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { EditTabControlService } from '../../services/edit-tab-control.service';


@Component({
  selector: 'app-edit-tab',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './edit-tab.component.html',
  styleUrl: './edit-tab.component.sass'
})
export class EditTabComponent {

  onSubmit() {
    console.log(this.detailsForm.value)
  }

  constructor(protected editTabControl : EditTabControlService){}

  attributesData = [
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
    },
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

  detailsFormData = [
    {
      key: "characterName",
      label: "Nome do personagem: ",
      type: "text",
      controlType: "input"
    },
    {
      key: "race",
      label: "Raça: ",
      type: "text",
      controlType: "input"
    },
    {
      key: "class",
      label: "Classe: ",
      type: "text",
      controlType: "input"
    },
    {
      key: "origin",
      label: "Origem: ",
      type: "text",
      controlType: "input"
    },
    {
      key: "divinity",
      label: "Divindade",
      type: "text",
      controlType: "input"
    },
    {
      key: "level",
      label: "Nivel: ",
      type: "number",
      controlType: "input"
    }
  ]

  pvFormData = [
    {
      key: "actualPv",
      label: "Vida atual: ",
      type: "number",
      controlType: "input"
    },
    {
      key: "maxPv",
      label: "Vida máxima: ",
      type: "number",
      controlType: "input"
    }
  ]

  mpFormData = [
    {
      key: "actualMp",
      label: "Mana atual: ",
      type: "number",
      controlType: "input"
    },
    {
      key: "maxMp",
      label: "Mana máxima: ",
      type: "number",
      controlType: "input"
    }
  ]

  attributeFormData = [
    {
      key: "attributeValue",
      label: "Valor do atributo: ",
      type: "number",
      controlType: "input"
    },
    {
      key: "attributeBonus",
      label: "Bônus do atributo: ",
      type: "number",
      controlType: "input"
    }
  ]

  savingThrowsFormData = [
    {
      key: "saveAttribute",
      label: "Atributo do teste: ",
      type: "text",
      controlType: "dropdown",
      options: this.attributesData
    },
    {
      key: "saveBonus",
      label: "Bônus do teste: ",
      type: "text",
      controlType: "input"
    }
  ]

  skillsFormData = [
    {
      key: "skillBonus",
      label: "Bônus de pericia: ",
      type: "number",
      controlType: "input"
    },
    {
      key: "skillTraining",
      label: "Treinamento de pericia: ",
      type: "text",
      controlType: "dropdown",
      options: this.trainingData
    },
    {
      key: "skillAttribute",
      label: "Atributo da pericia: ",
      type: "text",
      controlType: "dropdown",
      options: this.attributesData
    }
  ]

  detailsForm = new FormGroup({
    characterName: new FormControl('', Validators.required),
    race: new FormControl('', Validators.required),
    class: new FormControl('', Validators.required),
    origin: new FormControl('', Validators.required),
    divinity: new FormControl('', Validators.required),
    level: new FormControl(0, Validators.required)
  })

  pvForm = new FormGroup({
    actualPv: new FormControl(0, Validators.required),
    maxPv: new FormControl(0, Validators.required)
  })

  mpForm = new FormGroup({
    actualMp: new FormControl(0, Validators.required),
    maxMp: new FormControl(0, Validators.required)
  })

  attributeForm = new FormGroup({
    attributeValue: new FormControl(0, Validators.required),
    attributeBonus: new FormControl(0, Validators.required)
  })

  perceptionForm = new FormGroup({
    perceptionBonus: new FormControl(0, Validators.required),
    perceptionAttribute: new FormControl("", Validators.required),
    training: new FormControl("", Validators.required),
  })

  savingThrowsForm = new FormGroup({
    saveAttribute: new FormControl("", Validators.required),
    saveBonus: new FormControl(0, Validators.required)
  })

  skillsForm = new FormGroup({
    skillBonus: new FormControl(0, Validators.required),
    skillTraining: new FormControl("", Validators.required),
    skillAttribute: new FormControl("", Validators.required)
  })

}
