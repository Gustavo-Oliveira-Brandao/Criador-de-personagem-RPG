import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { EditTabControlService } from '../../services/edit-tab-control.service';
import { CharacterService } from '../../services/character.service';
import { DynamicFormComponent } from '../../../../shared/components/dynamic-form/dynamic-form.component';


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
    this.character.skills[22].attribute = String(this.perceptionForm.value.perceptionAttribute)
    this.character.skills[22].bonus = Number(this.perceptionForm.value.perceptionBonus)
    this.character.skills[22].training = String(this.perceptionForm.value.training)
  }

  onSubmitSavingThrows() {
    this.character.savingThrows[this.editTabControl.saveIndex].attribute = String(this.savingThrowsForm.value.savingAttribute)
    this.character.savingThrows[this.editTabControl.saveIndex].bonus = Number(this.savingThrowsForm.value.savingBonus)
    this.character.savingThrows[this.editTabControl.saveIndex].training = String(this.savingThrowsForm.value.savingTraining)
    this.character.updateSkills()
  }

  onSubmitSkills() {
    this.character.skills[this.editTabControl.skillIndex].attribute = String(this.skillsForm.value.skillAttribute)
    this.character.skills[this.editTabControl.skillIndex].training = String(this.skillsForm.value.skillTraining)
    this.character.skills[this.editTabControl.skillIndex].bonus = Number(this.skillsForm.value.skillBonus)
    this.character.updateSkills()
  }

  onSubmitActions(){

  }

  constructor(private readonly character: CharacterService, protected editTabControl: EditTabControlService, private readonly formBuilder: FormBuilder) {

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
      key: "savingBonus",
      label: "Bônus do teste: ",
      type: "number",
      controlType: "input"
    },
    {
      key: "savingTraining",
      label: "Treinamento: ",
      type: "text",
      controlType: "dropdown",
      options: this.trainingData
    },
    {
      key: "savingAttribute",
      label: "Atributo do teste: ",
      type: "text",
      controlType: "dropdown",
      options: this.attributesData
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

  actionsFormData = []

  detailsForm = this.formBuilder.group({
    name: [this.character.details.name],
    race: [this.character.details.race],
    class: [this.character.details.class],
    origin: [this.character.details.origin],
    divinity: [this.character.details.divinity],
    level: [this.character.details.level]
  })

  pvForm = this.formBuilder.group({
    actualPv: [this.character.status.actualPv],
    maxPv: [this.character.status.maxPv]
  })

  mpForm = this.formBuilder.group({
    actualMp: [this.character.status.actualMp],
    maxMp: [this.character.status.maxMp]
  })

  attributeForm = this.formBuilder.group({
    attributeValue: [this.character.attributes[this.editTabControl.attributeIndex].value],
    attributeBonus: [this.character.attributes[this.editTabControl.attributeIndex].bonus]
  })

  perceptionForm = this.formBuilder.group({
    perceptionBonus: [this.character.skills[22].bonus],
    perceptionAttribute: [this.character.skills[22].attribute],
    training: [this.character.skills[22].training],
  });

  savingThrowsForm = this.formBuilder.group({
    savingBonus: [this.character.savingThrows[this.editTabControl.saveIndex].bonus],
    savingTraining: [this.character.savingThrows[this.editTabControl.saveIndex].training],
    savingAttribute: [this.character.savingThrows[this.editTabControl.saveIndex].attribute],
  });

  skillsForm = this.formBuilder.group({
    skillBonus: [this.character.skills[this.editTabControl.skillIndex].bonus],
    skillTraining: [this.character.skills[this.editTabControl.skillIndex].training],
    skillAttribute: [this.character.skills[this.editTabControl.skillIndex].attribute],
  });

  actionsForm=this.formBuilder.group({
    actionName: []
  })

}
