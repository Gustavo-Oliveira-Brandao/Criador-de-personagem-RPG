import { Component } from '@angular/core';
import { IFormData } from '../../../../core/models/i-form-data';
import { ExpandedTabControlService } from '../../services/expanded-tab-control.service';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CharacterService } from '../../services/character.service';

@Component({
  selector: 'app-attr-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './attr-form.component.html',
  styleUrl: './attr-form.component.sass'
})
export class AttrFormComponent {

  constructor(private readonly character : CharacterService, protected etc : ExpandedTabControlService, private readonly fb : FormBuilder){}

  attrForm = this.fb.group({
    attrValue: ["", Validators.required],
    attrBonus: [""]
  })

  attrQuestions : IFormData[] = [
    {
      key: "attrValue",
      label: "valor do atributo: ",
      type: "number",
      controlType: "input",
      required: true
    },
    {
      key: "attrBonus",
      label: "bônus do atributo: ",
      type: "number",
      controlType: "input",
      required: true
    }
  ]

  onSubmit(){
    this.character.attributes[this.etc.index].value = Number(this.attrForm.controls.attrValue.value)
    this.character.attributes[this.etc.index].bonus = Number(this.attrForm.controls.attrBonus.value)
    this.character.updateSkills()
  }
}
