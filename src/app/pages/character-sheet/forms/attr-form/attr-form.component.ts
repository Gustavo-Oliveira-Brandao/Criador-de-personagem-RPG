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
    id: [this.character.build.attributes[this.etc.index].id],
    name:[this.character.build.attributes[this.etc.index].name],
    totalValue: [this.character.build.attributes[this.etc.index].totalValue, Validators.required]
  })

  attrQuestions: IFormData[] = [
    {
      key: "totalValue",
      label: "valor do atributo: ",
      type: "number",
      controlType: "input"
    }
  ]

  onSubmit() {
    const formValue : IAttribute = this.attrForm.getRawValue()

    const attribute : IAttribute = {
      id: formValue.id,
      name: formValue.name,
      totalValue: +formValue.totalValue
    }

    this.character.build.attributes[this.etc.index] = attribute
    this.character.updateSkills()
  }
}
