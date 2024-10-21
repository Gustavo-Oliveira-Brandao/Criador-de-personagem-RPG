import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { IFormData } from '../../../../core/models/i-form-data';
import { ExpandedTabControlService } from '../../services/expanded-tab-control.service';
import { CharacterService } from '../../services/character.service';
import { ISkill } from '../../../../core/models/i-skill';

@Component({
  selector: 'app-skill-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './skill-form.component.html',
  styleUrl: './skill-form.component.sass'
})
export class SkillFormComponent {

  constructor(private readonly etc: ExpandedTabControlService, private readonly fb: FormBuilder, private readonly character: CharacterService) { }

  skillForm = this.fb.nonNullable.group({
    bonus: [this.etc.choosenSkill.bonus],
    training: [this.etc.choosenSkill.training, Validators.required],
    attribute: [this.etc.choosenSkill.attribute, Validators.required]
  })
  skillQuestions: IFormData[] = [
    {
      key: "bonus",
      label: "bônus da pericia: ",
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

  onSubmit() {
    const formValue = this.skillForm.getRawValue()

    let skill: ISkill = {
      name: this.etc.choosenSkill.name,
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
