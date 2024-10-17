import { Component, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ExpandedTabControlService } from '../../services/expanded-tab-control.service';
import { IFormData } from '../../../../core/models/i-form-data';
import { CharacterService } from '../../services/character.service';
import { IAttack } from '../../../../core/models/i-attack';

@Component({
  selector: 'app-attack-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './attack-form.component.html',
  styleUrl: './attack-form.component.sass'
})
export class AttackFormComponent implements OnInit {

  ngOnInit(): void {
    this.attackForm.controls.toHit.disable()
  }

  constructor(private character: CharacterService, private readonly fb: FormBuilder, protected etc: ExpandedTabControlService) { }

  attackForm = this.fb.nonNullable.group({
    name: ["", Validators.required],
    range: ["melee", Validators.required],
    toHit: [0],
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

  attackQuestions: IFormData[] = [
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
    },
    {
      key: "toHitSkill",
      label: "pericia de acerto:",
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
      label: "bônus de acerto:",
      type: "number",
      controlType: "input",
      placeholder: "0"
    },
    {
      key: "critMargin",
      label: "margem de critico:",
      type: "number",
      controlType: "input",
      placeholder: "20"
    },
    {
      key: "critMultiplier",
      label: "multilpicador de critico:",
      type: "number",
      controlType: "input",
      placeholder: "2"
    },
    {
      key: "damageAttribute",
      label: "atributo de dano:",
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
      label: "bônus de dano:",
      type: "number",
      controlType: "input",
      placeholder: "0"
    },
    {
      key: "damageType",
      label: "tipo de dano:",
      type: "text",
      controlType: "dropdown",
      options: this.etc.damageTypeData
    },
    {
      key: "description",
      label: "descrição:",
      type: "text",
      controlType: "textarea",
      placeholder: "Maior que espadas longas, essa espada é capaz de..."
    }
  ]

  onSubmit() {

    const attack: IAttack = this.attackForm.getRawValue()

    for (let skill of this.character.skills) {
      if (skill.name == attack.name) {
        attack.toHit = skill.value + attack.toHitBonus
      }
    }
    console.log(typeof(attack.toHit))

    if (this.etc.action == "addAttack") {
      this.character.attacks.push(attack)
    }
    if (this.etc.action == "editAttack") {
      this.character.attacks[this.etc.index] = attack
    }
    this.character.updateAttacksToHitT20()
  }
}
