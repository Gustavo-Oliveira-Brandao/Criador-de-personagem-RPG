import { Injectable } from '@angular/core';
import { ISkill } from '../../../core/models/i-skill';
import { RpgCharacter } from '../../../core/models/i-character';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor() {
  }

  list() {
    const result = localStorage.getItem("characters")
    if (result) {
      this.characters = JSON.parse(result)
    }
  }

  loadSelectedCharacter(character : RpgCharacter) {
    this.build = character
  }

  createCharacter(character : RpgCharacter){
    this.characters.push(character)
    localStorage.setItem("characters", JSON.stringify(this.characters))
  }

  characters : RpgCharacter[] = []

  build !: RpgCharacter

  edition = "t20"

  updateSkills() {
    if (this.edition == "t20") {
      this.updateSkillsValuesT20(this.build.savingThrows)
      this.updateSkillsValuesT20(this.build.skills)
      this.updateAttacksToHitT20()
    }
    if (this.edition == "jade") {
      this.updateSkillsValuesJade(this.build.savingThrows)
      this.updateSkillsValuesJade(this.build.skills)
    }
  }

  updateAttacksToHitT20() {
    if (this.build.attacks) {
      for (let attack of this.build.attacks) {
        for (let skill of this.build.skills) {
          if (skill.name == attack.toHitSkill) {
            attack.toHit = skill.totalValue + attack.toHitBonus
          }
        }
      }
    }
  }

  updateSkillsValuesT20(skills: ISkill[]) {
    for (let skill of skills) {
      let attributeModifier = 0
      for (let attribute of this.build.attributes) {
        if (attribute.name == skill.attribute) {
          attributeModifier = attribute.totalValue
        }
      }

      this.checkSkillTrainingT20(skill)
      if (skill.armorPenalty) {
        skill.totalValue = Math.floor(this.build.level / 2) + skill.bonus + skill.trainingValue + attributeModifier - this.build.armorPenaltyValue
      }
      else {
        skill.totalValue = Math.floor(this.build.level / 2) + skill.bonus + skill.trainingValue + attributeModifier
      }
    }
  }

  checkSkillTrainingT20(skill: ISkill) {

    if (skill.training == "destreinado") {
      skill.trainingValue = 0
    }
    if (skill.training == "treinado") {
      if (this.build.level < 7) {
        skill.trainingValue = 2
      }
      if (this.build.level > 6 && this.build.level < 15) {
        skill.trainingValue = 4
      }
      if (this.build.level > 15) {
        skill.trainingValue = 6
      }
    }

  }

  checkSkillTrainingJade(skill: ISkill) {

    if (skill.training == "destreinado") {
      skill.trainingValue = Math.floor(this.build.level / 2)
    }
    if (skill.training == "treinado") {
      skill.trainingValue = this.build.level + 3
    }

  }

  updateSkillsValuesJade(skills: ISkill[]) {
    for (let skill of skills) {
      let attributeModifier = 0
      for (let attribute of this.build.attributes) {
        if (attribute.name == skill.attribute) {
          attributeModifier = attribute.totalValue
        }
      }

      this.checkSkillTrainingJade(skill)
      if (skill.armorPenalty) {
        skill.totalValue = skill.bonus + skill.trainingValue + attributeModifier - this.build.armorPenaltyValue
      }
      else {
        skill.totalValue = skill.bonus + skill.trainingValue + attributeModifier
      }
    }
  }
}
