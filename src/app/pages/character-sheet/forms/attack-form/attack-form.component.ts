import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ExpandedTabControlService } from '../../services/expanded-tab-control.service';
import { IFormData } from '../../../../core/models/i-form-data';
import { CharacterService } from '../../services/character.service';
import { IAttack } from '../../../../core/models/i-attack';
import { DynamicFormComponent } from "../../../../shared/components/dynamic-form/dynamic-form.component";

@Component({
  selector: 'app-attack-form',
  standalone: true,
  imports: [ReactiveFormsModule, DynamicFormComponent],
  templateUrl: './attack-form.component.html',
  styleUrl: './attack-form.component.sass'
})
export class AttackFormComponent {


  constructor(private readonly character: CharacterService, private readonly fb: FormBuilder, protected etc: ExpandedTabControlService) { }

  attackForm = this.fb.nonNullable.group({
    name: ["", Validators.required],
    range: ["melee", Validators.required],
    toHitSkill: ["luta", Validators.required],
    toHitBonus: [0, Validators.required],
    critMultiplier: [2, Validators.required],
    critMargin: [20, Validators.required],
    damageAttribute: ["forca", Validators.required],
    damage: ["", Validators.required],
    bonusDamage: [0, Validators.required],
    damageType: ["cortante", Validators.required],
    description: [""]
  })

  attackQuestions: IFormData[] = [{
    fieldSetLabel: "Detalhes",
    questions: [
      {
        key: "name",
        label: "nome:",
        type: "text",
        controlType: "input",
        placeholder: "Espada grande"
      },
      {
        key: "range",
        label: "alcance:",
        type: "text",
        controlType: "dropdown",
        options: [
          {
            key: "melee",
            value: "Corpo a corpo"
          },
          {
            key: "ranged",
            value: "A distancia"
          }
        ]
      }]
  },
  {
    fieldSetLabel: "Acerto",
    questions: [
      {
        key: "toHitSkill",
        label: "pericia:",
        type: "text",
        controlType: "dropdown",
        options: [
          {
            key: "luta",
            value: "Luta"
          },
          {
            key: "pontaria",
            value: "Pontaria"
          }
        ]
      },
      {
        key: "toHitBonus",
        label: "bônus:",
        type: "number",
        controlType: "input",
        placeholder: "0"
      },
      {
        key: "critMargin",
        label: "margem de ameaça:",
        type: "number",
        controlType: "input",
        placeholder: "20"
      },
      {
        key: "critMultiplier",
        label: "multilpicador:",
        type: "number",
        controlType: "input",
        placeholder: "2"
      }
    ],
  },
  {
    fieldSetLabel: "Dano",
    questions: [
      {
        key: "damageAttribute",
        label: "atributo:",
        type: "text",
        controlType: "dropdown",
        options: this.etc.attrData
      },
      {
        key: "damage",
        label: "dano:",
        type: "text",
        controlType: "input",
        placeholder: "1d12"
      },
      {
        key: "bonusDamage",
        label: "bônus:",
        type: "number",
        controlType: "input",
        placeholder: "0"
      },
      {
        key: "damageType",
        label: "tipo:",
        type: "text",
        controlType: "dropdown",
        options: this.etc.damageTypeData
      }
    ]
  },
  {
    fieldSetLabel: "Anotações",
    questions: [
      {
        key: "description",
        label: "descrição:",
        type: "text",
        controlType: "textarea",
        placeholder: "Maior que espadas longas, essa espada é capaz de..."
      }
    ]
  }
  ]

  onSubmit(formValue: any) {

    const attack: IAttack = {
      name: formValue.name,
      attackRange: formValue.range,
      toHit: 0,
      toHitSkill: formValue.toHitSkill,
      toHitBonus: +formValue.toHitBonus,
      critMultiplier: +formValue.critMultiplier,
      critMargin: +formValue.critMargin,
      description: formValue.description,
      damages: []
    }

    if (this.etc.action == "addAttack") {
      this.character.build.attacks!.push(attack)
    }
    if (this.etc.action == "editAttack") {
      this.character.build.attacks![this.etc.index] = attack
    }
    this.character.updateSkills()
  }
}
