import { Component } from '@angular/core';
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
export class AttackFormComponent {

  constructor(private character : CharacterService ,private readonly fb: FormBuilder, protected etc: ExpandedTabControlService) { }

  attackForm = this.fb.group({
    attackName: ["", Validators.required],
    attackRange: ["melee", Validators.required],
    attackToHitSkill: ["luta", Validators.required],
    attackToHitBonus: [0, Validators.required],
    attackCritMultiplier: [2, Validators.required],
    attackCritMargin: [20, Validators.required],
    attackDamageAttribute: ["forca", Validators.required],
    attackDamage1: ["", Validators.required],
    attackBonusDamage1: [0, Validators.required],
    attackDamageType1: ["cortante", Validators.required],
    attackDamage2: [""],
    attackBonusDamage2: [0, Validators.required],
    attackDamageType2: ["cortante"],
    attackDescription: [""]
  })

  attackQuestions: IFormData[] = [
    {
      key: "attackName",
      label: "nome:",
      type: "text",
      controlType: "input",
      placeholder: "Espada grande"
    },
    {
      key: "attackRange",
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
      key: "attackToHitSkill",
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
      key: "attackToHitBonus",
      label: "bônus de acerto:",
      type: "number",
      controlType: "input",
      placeholder: "0"
    },
    {
      key: "attackCritMargin",
      label: "margem de critico:",
      type: "number",
      controlType: "input",
      placeholder: "20"
    },
    {
      key: "attackCritMultiplier",
      label: "multilpicador de critico:",
      type: "number",
      controlType: "input",
      placeholder: "2"
    },
    {
      key: "attackDamageAttribute",
      label: "atributo de dano:",
      type: "text",
      controlType: "dropdown",
      options: this.etc.attrData
    },
    {
      key: "attackDamage1",
      label: "dano:",
      type: "text",
      controlType: "input",
      placeholder: "1d12"
    },
    {
      key: "attackBonusDamage1",
      label: "bônus de dano:",
      type: "number",
      controlType: "input",
      placeholder: "0"
    },
    {
      key: "attackDamageType1",
      label: "tipo de dano:",
      type: "text",
      controlType: "dropdown",
      options: this.etc.damageTypeData
    },
    {
      key: "attackDescription",
      label: "descrição:",
      type: "text",
      controlType: "textarea",
      placeholder: "Maior que espadas longas, essa espada é capaz de..."
    }
  ]

  onSubmit() {
    const { attackName, attackRange, attackToHitSkill, attackToHitBonus, attackCritMultiplier, attackCritMargin, attackDamageAttribute, attackDamage1, attackBonusDamage1, attackDamageType1, attackDescription } = this.attackForm.controls
    
    let toHit = 0
    
    for(let skill of this.character.skills){
      if(skill.name == String(attackToHitSkill)){
        toHit = skill.value + Number(attackToHitBonus) 
      }
    }

    const splitDice = String(attackDamage1.value).split("d")

    let diceQuantity = Number(splitDice[0])
    let diceSize = Number(splitDice[1])

    const attack : IAttack = {
      name: String(attackName.value),
      range: String(attackRange.value),
      toHitSkill: String(attackToHitSkill.value),
      toHit: toHit,
      critMultiplier: Number(attackCritMultiplier.value),
      critMargin: Number(attackCritMargin.value),
      description: String(attackDescription),
      damages : [{
        quantity: diceQuantity,
        diceSize: diceSize,
        type: String(attackDamageType1.value),
        bonus: Number(attackBonusDamage1.value)
      }]
    }

    this.character.attacks.push(attack)
  }
}
