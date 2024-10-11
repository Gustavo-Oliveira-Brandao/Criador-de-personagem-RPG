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
      if(this.etc.action == "editAttack"){
        const oldAttack = this.character.attacks[this.etc.index]

        const oldAttackDamage1 = String(oldAttack.damages[0].quantity + "d" + oldAttack.damages[0].diceSize)

        this.attackForm.setValue({
          attackName: oldAttack.name,
          attackRange: oldAttack.range,
          attackToHitSkill: oldAttack.toHitSkill,
          attackToHitBonus: oldAttack.toHitBonus,
          attackCritMultiplier: oldAttack.critMultiplier,
          attackCritMargin: oldAttack.critMargin,
          attackDamageAttribute: oldAttack.damages[0].attribute,
          attackDamage1: oldAttackDamage1,
          attackBonusDamage1: oldAttack.damages[0].bonus,
          attackDamageType1: oldAttack.damages[0].type,
          attackDescription: oldAttack.description ?? ""
        })
      }
  }

  constructor(private character: CharacterService, private readonly fb: FormBuilder, protected etc: ExpandedTabControlService) { }

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

    const formValue = this.attackForm.getRawValue()

    const splitDice = formValue.attackDamage1!.split("d")

    let diceQuantity = Number(splitDice[0])
    let diceSize = Number(splitDice[1])

    const attack: IAttack = {
      name: formValue.attackName ?? "",
      range: formValue.attackRange ?? "",
      toHitSkill: formValue.attackToHitSkill ?? "",
      toHit: 0,
      toHitBonus: Number(formValue.attackToHitBonus),
      critMultiplier: Number(formValue.attackCritMultiplier),
      critMargin: Number(formValue.attackCritMargin),
      description: String(formValue.attackDescription),
      damages: [{
        quantity: diceQuantity,
        diceSize: diceSize,
        type: String(formValue.attackDamageType1),
        attribute: String(formValue.attackDamageAttribute),
        bonus: Number(formValue.attackBonusDamage1)
      }]
    }

    if(this.etc.action == "addAttack"){
    this.character.attacks.push(attack)
    }
    if(this.etc.action == "editAttack"){
    this.character.attacks[this.etc.index] = attack
    }
    this.character.updateAttacksToHitT20()
  }
}
