import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ExpandedTabControlService } from '../../services/expanded-tab-control.service';
import { IFormData } from '../../../../core/models/i-form-data';
import { CharacterService } from '../../services/character.service';
import { DynamicFormComponent } from "../../../../shared/components/dynamic-form/dynamic-form.component";

@Component({
  selector: 'app-details-form',
  standalone: true,
  imports: [ReactiveFormsModule, DynamicFormComponent],
  templateUrl: './details-form.component.html',
  styleUrl: './details-form.component.sass'
})
export class DetailsFormComponent {

  constructor(private readonly character: CharacterService, private readonly fb: FormBuilder, private readonly etc: ExpandedTabControlService) { }

  detailsForm = this.fb.nonNullable.group({
    charName: [this.character.build.name, Validators.required],
    charRace: [this.character.build.race, Validators.required],
    charClass: [this.character.build.charClass, Validators.required],
    charOrigin: [this.character.build.origin, Validators.required],
    charDivinity: [this.character.build.divinity],
    charLevel: [this.character.build.level, Validators.required]
  })

  detailsQuestions: IFormData[] = [
    {
      fieldSetLabel: "Detalhes",
      questions: [
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
        }
      ]
    },
    {
      fieldSetLabel: "Experiência",
      questions: [
        {
          key: "charLevel",
          label: "nivel: ",
          type: "number",
          controlType: "input"
        }
      ]
    }

  ]

  onSubmit(formValue: any) {

    const details: any = {
      name: formValue.charName,
      race: formValue.charRace,
      class: formValue.charClass,
      origin: formValue.charOrigin,
      divinity: formValue.charDivinity,
      level: +formValue.charLevel
    }

    this.character.build = details
    this.character.updateSkills()
  }
}
