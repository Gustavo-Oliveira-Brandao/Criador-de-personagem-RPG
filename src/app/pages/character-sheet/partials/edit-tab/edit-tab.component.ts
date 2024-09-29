import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { EditTabControlService } from '../../services/edit-tab-control.service';
import { CharacterService } from '../../services/character.service';
import { DynamicFormComponent } from '../../../../shared/components/dynamic-form/dynamic-form.component';
import { IDetails } from '../../../../core/models/idetails';


@Component({
  selector: 'app-edit-tab',
  standalone: true,
  imports: [ReactiveFormsModule, DynamicFormComponent],
  templateUrl: './edit-tab.component.html',
  styleUrl: './edit-tab.component.sass'
})
export class EditTabComponent {

  onSubmitDetails() {
    this.character.details.name = String(this.detailsForm.value.name)
    this.character.details.race = String(this.detailsForm.value.race)
    this.character.details.class = String(this.detailsForm.value.class)
    this.character.details.origin = String(this.detailsForm.value.origin)
    this.character.details.divinity = String(this.detailsForm.value.divinity)
    this.character.details.level = Number(this.detailsForm.value.level)
    this.character.updateSkills()
  }

  onSubmitAttribute() {
    this.character.attributes[this.editTabControl.attributeIndex].value = Number(this.attributeForm.value.attributeValue)
    this.character.attributes[this.editTabControl.attributeIndex].bonus = Number(this.attributeForm.value.attributeBonus)
    this.character.updateSkills()
  }

  onSubmitPv() {
    this.character.status.actualPv = Number(this.pvForm.value.actualPv)
    this.character.status.maxPv = Number(this.pvForm.value.maxPv)
  }

  onSubmitMp() {
    this.character.status.actualMp = Number(this.mpForm.value.actualMp)
    this.character.status.maxMp = Number(this.mpForm.value.maxMp)
  }

  onSubmitPerception() {
    this.character.perception.attribute = String(this.perceptionForm.value.perceptionAttribute)
    this.character.perception.bonus = Number(this.perceptionForm.value.perceptionBonus)
    this.character.perception.training = String(this.perceptionForm.value.training)
  }

  onSubmitSavingThrows() {
    this.character.savingThrows[this.editTabControl.saveIndex].attribute = String(this.savingThrowsForm.value.saveAttribute)
    this.character.savingThrows[this.editTabControl.saveIndex].bonus = Number(this.savingThrowsForm.value.saveBonus)
    this.character.updateSkills()
  }

  onSubmitSkills() {
    this.character.skills[this.editTabControl.skillIndex].attribute = String(this.skillsForm.value.skillAttribute)
    this.character.skills[this.editTabControl.skillIndex].training = String(this.skillsForm.value.skillTraining)
    this.character.skills[this.editTabControl.skillIndex].bonus = Number(this.skillsForm.value.skillBonus)
    this.character.updateSkills()
  }

  constructor(private character: CharacterService, protected editTabControl: EditTabControlService) {

  }

  attributesData = ["forca", "destreza", "constituicao", "inteligencia", "sabedoria", "carisma"]

  trainingData = ["destreinado", "treinado"]

  detailsFormData = [
    {
      key: "name",
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
      type: "number",
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
    name: new FormControl(this.character.details.name),
    race: new FormControl(this.character.details.race),
    class: new FormControl(this.character.details.class),
    origin: new FormControl(this.character.details.origin),
    divinity: new FormControl(this.character.details.divinity),
    level: new FormControl(this.character.details.level)
  })

  pvForm = new FormGroup({
    actualPv: new FormControl(this.character.status.actualPv),
    maxPv: new FormControl(this.character.status.maxPv)
  })

  mpForm = new FormGroup({
    actualMp: new FormControl(this.character.status.actualMp),
    maxMp: new FormControl(this.character.status.maxMp)
  })

  attributeForm = new FormGroup({
    attributeValue: new FormControl(this.character.attributes[this.editTabControl.attributeIndex].value),
    attributeBonus: new FormControl(this.character.attributes[this.editTabControl.attributeIndex].bonus)
  })

  perceptionForm = new FormGroup({
    perceptionBonus: new FormControl(this.character.perception.bonus),
    perceptionAttribute: new FormControl(this.character.perception.attribute),
    training: new FormControl(this.character.perception.training),
  })

  savingThrowsForm = new FormGroup({
    saveAttribute: new FormControl(this.character.savingThrows[this.editTabControl.saveIndex].attribute),
    saveBonus: new FormControl(this.character.savingThrows[this.editTabControl.saveIndex].bonus)
  })

  skillsForm = new FormGroup({
    skillBonus: new FormControl(this.character.skills[this.editTabControl.skillIndex].bonus),
    skillTraining: new FormControl(this.character.skills[this.editTabControl.skillIndex].training),
    skillAttribute: new FormControl(this.character.skills[this.editTabControl.skillIndex].attribute)
  })

}
