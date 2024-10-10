import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { IFormData } from '../../../../core/models/i-form-data';
import { ExpandedTabControlService } from '../../services/expanded-tab-control.service';
import { CharacterService } from '../../services/character.service';

@Component({
  selector: 'app-skill-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './skill-form.component.html',
  styleUrl: './skill-form.component.sass'
})
export class SkillFormComponent {

  constructor(private readonly etc: ExpandedTabControlService, private readonly fb: FormBuilder, private readonly character: CharacterService) { }

  skillForm = this.fb.group({
    skillBonus: [this.etc.choosenSkill.bonus],
    skillTraining: [this.etc.choosenSkill.training, Validators.required],
    skillAttr: [this.etc.choosenSkill.attribute, Validators.required]
  })
  skillQuestions: IFormData[] = [
    {
      key: "skillBonus",
      label: "bônus da pericia: ",
      type: "number",
      controlType: "input",
      required: true
    },
    {
      key: "skillTraining",
      label: "treinamento: ",
      type: "text",
      controlType: "dropdown",
      required: true,
      options: this.etc.trainingData
    },
    {
      key: "skillAttr",
      label: "Atributo: ",
      type: "text",
      controlType: "dropdown",
      required: true,
      options: this.etc.attrData
    }
  ]

  onSubmit() {
    if (this.etc.tab == "skill") {
      this.character.skills[this.etc.index].bonus = Number(this.skillForm.controls.skillBonus.value)
      this.character.skills[this.etc.index].training = String(this.skillForm.controls.skillTraining.value)
      this.character.skills[this.etc.index].attribute = String(this.skillForm.controls.skillAttr.value)
    }

    if (this.etc.tab == "save"){
      this.character.savingThrows[this.etc.index].bonus = Number(this.skillForm.controls.skillBonus.value)
      this.character.savingThrows[this.etc.index].training = String(this.skillForm.controls.skillTraining.value)
      this.character.savingThrows[this.etc.index].attribute = String(this.skillForm.controls.skillAttr.value)
    }
    this.character.updateSkills()
  }
}
