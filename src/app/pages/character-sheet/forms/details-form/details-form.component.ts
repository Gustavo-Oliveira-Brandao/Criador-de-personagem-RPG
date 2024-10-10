import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ExpandedTabControlService } from '../../services/expanded-tab-control.service';
import { IFormData } from '../../../../core/models/i-form-data';
import { CharacterService } from '../../services/character.service';

@Component({
  selector: 'app-details-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './details-form.component.html',
  styleUrl: './details-form.component.sass'
})
export class DetailsFormComponent {

  constructor(private readonly character: CharacterService, private readonly fb: FormBuilder, private readonly etc: ExpandedTabControlService) { }

  detailsForm = this.fb.group({
    charName: [this.character.details.name, Validators.required],
    charRace: [this.character.details.race, Validators.required],
    charClass: [this.character.details.class, Validators.required],
    charOrigin: [this.character.details.origin, Validators.required],
    charDivinity: [this.character.details.divinity],
    charLevel: [this.character.details.level, Validators.required]
  })

  detailsQuestions: IFormData[] = [
    {
      key: "charName",
      label: "nome do personagem: ",
      type: "text",
      controlType: "input",
      required: true
    },
    {
      key: "charRace",
      label: "raça: ",
      type: "text",
      controlType: "input",
      required: true
    },
    {
      key: "charClass",
      label: "classe: ",
      type: "text",
      controlType: "input",
      required: true
    },
    {
      key: "charOrigin",
      label: "origem: ",
      type: "text",
      controlType: "input",
      required: true
    },
    {
      key: "charDivinity",
      label: "Divindade: ",
      type: "text",
      controlType: "input",
      required: true
    },
    {
      key: "charLevel",
      label: "nivel: ",
      type: "number",
      controlType: "input",
      required: true
    }
  ]

  onSubmit() {
    this.character.details.name = String(this.detailsForm.controls.charName.value)
    this.character.details.race = String(this.detailsForm.controls.charRace.value)
    this.character.details.class = String(this.detailsForm.controls.charClass.value)
    this.character.details.origin = String(this.detailsForm.controls.charOrigin.value)
    this.character.details.divinity = String(this.detailsForm.controls.charDivinity.value)
    this.character.details.level = Number(this.detailsForm.controls.charLevel.value)
    this.character.updateSkills()
  }
}
