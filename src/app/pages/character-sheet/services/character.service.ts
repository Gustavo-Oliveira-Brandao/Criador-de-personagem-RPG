import { Injectable } from '@angular/core';
import { ISkill } from '../../../core/models/i-skill';
import { IAttribute } from '../../../core/models/i-attribute';
import { IDetails } from '../../../core/models/idetails';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor() { }

  details: IDetails = {
    name: "Insira seu nome",
    race: "Insira sua raça",
    class: "Insira sua classe",
    origin: "Insira sua origem",
    divinity: "Insira sua divindade",
    level: 1
  }

  edition = "t20"

  status = {
    actualPv: 1,
    maxPv: 1,
    actualMp: 1,
    maxMp: 1,
    temporaryPv: 0,
    ac: 10,
    armorPenaltyValue: 0
  }

  attributes: IAttribute[] = [
    {
      name: "forca",
      value: 0,
      bonus: 0
    },
    {
      name: "destreza",
      value: 0,
      bonus: 0
    },
    {
      name: "constituicao",
      value: 0,
      bonus: 0
    },
    {
      name: "inteligencia",
      value: 0,
      bonus: 0
    },
    {
      name: "sabedoria",
      value: 0,
      bonus: 0
    },
    {
      name: "carisma",
      value: 0,
      bonus: 0
    }

  ]

  speed = {
    name: "DESLOCAMENTO",
    value: 30
  }

  savingThrows: ISkill[] = [
    {
      name: "fortitude",
      value: 0,
      bonus: 0,
      training: "destreinado",
      trainingValue: 0,
      attribute: "constituicao",
      traningRestriction: false,
      armorPenalty: false
    },
    {
      name: "reflexos",
      value: 0,
      bonus: 0,
      training: "destreinado",
      trainingValue: 0,
      attribute: "destreza",
      traningRestriction: false,
      armorPenalty: false
    },
    {
      name: "vontade",
      value: 0,
      bonus: 0,
      training: "destreinado",
      trainingValue: 0,
      attribute: "sabedoria",
      traningRestriction: false,
      armorPenalty: false
    }
  ]

  skills: ISkill[] = [
    {
      name: 'acrobacia',
      value: 0,
      training: 'destreinado',
      trainingValue: 0,
      bonus: 0,
      attribute: 'destreza',
      traningRestriction: false,
      armorPenalty: true
    },

    {
      name: 'adestramento',
      value: 0,
      training: 'destreinado',
      trainingValue: 0,
      bonus: 0,
      attribute: 'carisma',
      traningRestriction: true,
      armorPenalty: false
    },

    {
      name: 'atletismo',
      value: 0,
      training: 'destreinado',
      trainingValue: 0,
      bonus: 0,
      attribute: 'forca',
      traningRestriction: false,
      armorPenalty: false
    },

    {
      name: 'atuacao',
      value: 0,
      training: 'destreinado',
      trainingValue: 0,
      bonus: 0,
      attribute: 'carisma',
      traningRestriction: false,
      armorPenalty: false
    },

    {
      name: 'cavalgar',
      value: 0,
      training: 'destreinado',
      trainingValue: 0,
      bonus: 0,
      attribute: 'destreza',
      traningRestriction: false,
      armorPenalty: false
    },

    {
      name: 'conhecimento',
      value: 0,
      training: 'destreinado',
      trainingValue: 0,
      bonus: 0,
      attribute: 'inteligencia',
      traningRestriction: true,
      armorPenalty: false
    },

    {
      name: 'cura',
      value: 0,
      training: 'destreinado',
      trainingValue: 0,
      bonus: 0,
      attribute: 'sabedoria',
      traningRestriction: false,
      armorPenalty: false
    },

    {
      name: 'diplomacia',
      value: 0,
      training: 'destreinado',
      trainingValue: 0,
      bonus: 0,
      attribute: 'carisma',
      traningRestriction: false,
      armorPenalty: false
    },

    {
      name: 'enganacao',
      value: 0,
      training: 'destreinado',
      trainingValue: 0,
      bonus: 0,
      attribute: 'carisma',
      traningRestriction: false,
      armorPenalty: false
    },

    {
      name: 'furtividade',
      value: 0,
      training: 'destreinado',
      trainingValue: 0,
      bonus: 0,
      attribute: 'destreza',
      traningRestriction: false,
      armorPenalty: true
    },

    {
      name: 'guerra',
      value: 0,
      training: 'destreinado',
      trainingValue: 0,
      bonus: 0,
      attribute: 'inteligencia',
      traningRestriction: true,
      armorPenalty: false
    },

    {
      name: "identificar magia",
      value: 0,
      training: 'destreinado',
      trainingValue: 0,
      bonus: 0,
      attribute: "inteligencia",
      traningRestriction: true,
      armorPenalty: false
    },

    {
      name: 'iniciativa',
      value: 0,
      training: 'destreinado',
      trainingValue: 0,
      bonus: 0,
      attribute: 'destreza',
      traningRestriction: false,
      armorPenalty: false
    },

    {
      name: 'intimidacao',
      value: 0,
      training: 'destreinado',
      trainingValue: 0,
      bonus: 0,
      attribute: 'carisma',
      traningRestriction: false,
      armorPenalty: false
    },

    {
      name: 'jogatina',
      value: 0,
      training: 'destreinado',
      trainingValue: 0,
      bonus: 0,
      attribute: 'carisma',
      traningRestriction: true,
      armorPenalty: false
    },

    {
      name: 'ladinagem',
      value: 0,
      training: 'destreinado',
      trainingValue: 0,
      bonus: 0,
      attribute: 'destreza',
      traningRestriction: true,
      armorPenalty: true
    },

    {
      name: 'luta',
      value: 0,
      training: 'destreinado',
      trainingValue: 0,
      bonus: 0,
      attribute: 'forca',
      traningRestriction: false,
      armorPenalty: false
    },

    {
      name: 'misticismo',
      value: 0,
      training: 'destreinado',
      trainingValue: 0,
      bonus: 0,
      attribute: 'inteligencia',
      traningRestriction: true,
      armorPenalty: false
    },

    {
      name: 'nobreza',
      value: 0,
      training: 'destreinado',
      trainingValue: 0,
      bonus: 0,
      attribute: 'inteligencia',
      traningRestriction: true,
      armorPenalty: false
    },

    {
      name: "obter informacao",
      value: 0,
      training: "destreinado",
      trainingValue: 0,
      bonus: 0,
      attribute: "carisma",
      traningRestriction: false,
      armorPenalty: false
    },

    {
      name: 'oficio',
      value: 0,
      training: 'destreinado',
      trainingValue: 0,
      bonus: 0,
      attribute: 'inteligencia',
      traningRestriction: true,
      armorPenalty: false
    },

    {
    name: "percepcao",
    value: 0,
    bonus: 0,
    training: "destreinado",
    trainingValue: 0,
    attribute: "sabedoria",
    traningRestriction: false,
    armorPenalty: false
    },

    {
      name: 'pilotagem',
      value: 0,
      training: 'destreinado',
      trainingValue: 0,
      bonus: 0,
      attribute: 'destreza',
      traningRestriction: true,
      armorPenalty: false
    },

    {
      name: 'pontaria',
      value: 0,
      training: 'destreinado',
      trainingValue: 0,
      bonus: 0,
      attribute: 'destreza',
      traningRestriction: false,
      armorPenalty: false
    },

    {
      name: 'religiao',
      value: 0,
      training: 'destreinado',
      trainingValue: 0,
      bonus: 0,
      attribute: 'sabedoria',
      traningRestriction: true,
      armorPenalty: false
    },

    {
      name: 'sobrevivencia',
      value: 0,
      training: 'destreinado',
      trainingValue: 0,
      bonus: 0,
      attribute: 'sabedoria',
      traningRestriction: false,
      armorPenalty: false
    },
  ];

  actions: any = [
    {
      name: "Ataque desarmado",
      range: "Corpo a corpo",
      hitValue: 9,
      damageText: "1d8+8+2d6",

    },

  ]

  updateSkills() {
    if (this.edition == "t20") {
      this.updateSkillsValuesT20(this.savingThrows)
      this.updateSkillsValuesT20(this.skills)
    }
    if (this.edition == "jade") {
      this.updateSkillsValuesJade(this.savingThrows)
      this.updateSkillsValuesJade(this.skills)
    }
  }

  updateSkillsValuesT20(skills: ISkill[]) {
    for (let skill of skills) {
      let attributeModifier = 0
      for (let attribute of this.attributes) {
        if (attribute.name == skill.attribute) {
          attributeModifier = attribute.value
        }
      }

      this.checkSkillTrainingT20(skill)
      if (skill.armorPenalty) {
        skill.value = Math.floor(this.details.level / 2) + skill.bonus + skill.trainingValue + attributeModifier - this.status.armorPenaltyValue
      }
      else {
        skill.value = Math.floor(this.details.level / 2) + skill.bonus + skill.trainingValue + attributeModifier
      }
    }
  }

  checkSkillTrainingT20(skill: ISkill) {

    if (skill.training == "destreinado") {
      skill.trainingValue = 0
    }
    if (skill.training == "treinado") {
      if (this.details.level < 7) {
        skill.trainingValue = 2
      }
      if (this.details.level > 6 && this.details.level < 15) {
        skill.trainingValue = 4
      }
      if (this.details.level > 15) {
        skill.trainingValue = 6
      }
    }

  }

  checkSkillTrainingJade(skill: ISkill) {

    if (skill.training == "destreinado") {
      skill.trainingValue = Math.floor(this.details.level / 2)
    }
    if (skill.training == "treinado") {
      skill.trainingValue = this.details.level + 3
    }

  }

  updateSkillsValuesJade(skills: ISkill[]) {
    for (let skill of skills) {
      let attributeModifier = 0
      for (let attribute of this.attributes) {
        if (attribute.name == skill.attribute) {
          attributeModifier = attribute.value
        }
      }

      this.checkSkillTrainingJade(skill)
      if (skill.armorPenalty) {
        skill.value = skill.bonus + skill.trainingValue + attributeModifier - this.status.armorPenaltyValue
      }
      else {
        skill.value = skill.bonus + skill.trainingValue + attributeModifier
      }
    }
  }
}
