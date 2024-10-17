import { Component, OnInit } from '@angular/core';
import { IFormData } from '../../../../core/models/i-form-data';
import { ExpandedTabControlService } from '../../services/expanded-tab-control.service';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CharacterService } from '../../services/character.service';
import { IAttribute } from '../../../../core/models/i-attribute';

@Component({
  selector: 'app-attr-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './attr-form.component.html',
  styleUrl: './attr-form.component.sass'
})
export class AttrFormComponent implements OnInit {

  ngOnInit(): void {
    this.attrForm.controls.name.disable()
  }

  constructor(private readonly character: CharacterService, protected etc: ExpandedTabControlService, private readonly fb: FormBuilder) { }

  attrForm = this.fb.nonNullable.group({
    name:[this.character.attributes[this.etc.index].name],
    value: [this.character.attributes[this.etc.index].value, Validators.required],
    bonus: [this.character.attributes[this.etc.index].bonus]
  })

  attrQuestions: IFormData[] = [
    {
      key: "value",
      label: "valor do atributo: ",
      type: "number",
      controlType: "input"
    },
    {
      key: "bonus",
      label: "bônus do atributo: ",
      type: "number",
      controlType: "input"
    }
  ]

  onSubmit() {
    const formValue : IAttribute = this.attrForm.getRawValue()

    const attribute : IAttribute = {
      name: formValue.name,
      value: Number(formValue.value),
      bonus: Number(formValue.bonus)
    }

    this.character.attributes[this.etc.index] = attribute
    this.character.updateSkills()
  }
}
