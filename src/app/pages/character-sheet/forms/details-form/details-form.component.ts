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
      controlType: "input"
    },
    {
      key: "charRace",
      label: "raça: ",
      type: "text",
      controlType: "input"
    },
    {
      key: "charClass",
      label: "classe: ",
      type: "text",
      controlType: "input"
    },
    {
      key: "charOrigin",
      label: "origem: ",
      type: "text",
      controlType: "input"
    },
    {
      key: "charDivinity",
      label: "Divindade: ",
      type: "text",
      controlType: "input"
    },
    {
      key: "charLevel",
      label: "nivel: ",
      type: "number",
      controlType: "input"
    }
  ]

  onSubmit() {
    const { charName, charRace, charClass, charOrigin, charDivinity, charLevel } = this.detailsForm.controls
    this.character.details.name = String(charName.value)
    this.character.details.race = String(charRace.value)
    this.character.details.class = String(charClass.value)
    this.character.details.origin = String(charOrigin.value)
    this.character.details.divinity = String(charDivinity.value)
    this.character.details.level = Number(charLevel.value)
    this.character.updateSkills()
  }
}
