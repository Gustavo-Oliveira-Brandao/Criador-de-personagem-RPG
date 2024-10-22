import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { IFormData } from '../../../../core/models/i-form-data';
import { ExpandedTabControlService } from '../../services/expanded-tab-control.service';
import { CharacterService } from '../../services/character.service';
import { ISkill } from '../../../../core/models/i-skill';
import { DynamicFormComponent } from "../../../../shared/components/dynamic-form/dynamic-form.component";

@Component({
  selector: 'app-skill-form',
  standalone: true,
  imports: [ReactiveFormsModule, DynamicFormComponent],
  templateUrl: './skill-form.component.html',
  styleUrl: './skill-form.component.sass'
})
export class SkillFormComponent {

  constructor(private readonly etc: ExpandedTabControlService, private readonly fb: FormBuilder, private readonly character: CharacterService) { }

  skillForm = this.fb.nonNullable.group({
    bonus: [this.character.build.skills[this.etc.index].bonus],
    training: [this.character.build.skills[this.etc.index].training, Validators.required],
    attribute: [this.character.build.skills[this.etc.index].attribute, Validators.required]
  })
  skillQuestions: IFormData[] = [
    {
      fieldSetLabel: "Pericia",
      questions: [
        {
          key: "bonus",
          label: "bônus: ",
          type: "number",
          controlType: "input"
        },
        {
          key: "training",
          label: "treinamento: ",
          type: "text",
          controlType: "dropdown",
          options: this.etc.trainingData
        },
        {
          key: "attribute",
          label: "Atributo: ",
          type: "text",
          controlType: "dropdown",
          options: this.etc.attrData
        }
      ]
    }
  ]

  onSubmit(formValue: any) {

    let skill: ISkill = {
      name: this.character.build.skills[this.etc.index].name,
      totalValue: 0,
      bonus: +formValue.bonus,
      training: formValue.training,
      trainingValue: 0,
      attribute: formValue.attribute,
      trainingRestriction: false,
      armorPenalty: true,
    }

    if (this.etc.tab == "skill") {
      this.character.build.skills[this.etc.index] = skill
    }

    if (this.etc.tab == "save") {
      this.character.build.savingThrows[this.etc.index] = skill
    }
    this.character.updateSkills()
  }

}
