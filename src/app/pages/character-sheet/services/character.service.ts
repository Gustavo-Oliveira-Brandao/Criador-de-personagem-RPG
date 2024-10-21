import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ISkill } from '../../../core/models/i-skill';
import { RpgCharacter } from '../../../core/models/i-character';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  private readonly skillsUrl: string;
  constructor(private readonly http: HttpClient) {
    this.skillsUrl = "http://localhost:8080/api/characters"
  }

  public populateDatabase() {

  }

  build: RpgCharacter = {
    name: "",
    race: "",
    charClass: "",
    origin: "",
    divinity: "",
    level: 1,
    maxHitPoints: 0,
    actualHitPoints: 0,
    temporaryHitPoints: 0,
    maxManaPoints: 0,
    actualManaPoints: 0,
    armorClass: 10,
    armorPenaltyValue: 0,
    speed: 0,
    story: "",
    attributes: [
      {
        name: "forca",
        totalValue: 0
      },
      {
        name: "destreza",
        totalValue: 0
      },
      {
        name: "constituicao",
        totalValue: 0
      },
      {
        name: "inteligencia",
        totalValue: 0
      },
      {
        name: "sabedoria",
        totalValue: 0
      },
      {
        name: "carisma",
        totalValue: 0
      }

    ],
    savingThrows: [
      {
        name: "fortitude",
        totalValue: 0,
        bonus: 0,
        training: "destreinado",
        trainingValue: 0,
        attribute: "constituicao",
        trainingRestriction: false,
        armorPenalty: false
      },
      {
        name: "reflexos",
        totalValue: 0,
        bonus: 0,
        training: "destreinado",
        trainingValue: 0,
        attribute: "destreza",
        trainingRestriction: false,
        armorPenalty: false
      },
      {
        name: "vontade",
        totalValue: 0,
        bonus: 0,
        training: "destreinado",
        trainingValue: 0,
        attribute: "sabedoria",
        trainingRestriction: false,
        armorPenalty: false
      }
    ],

    skills: [
      {
        name: 'acrobacia',
        totalValue: 0,
        training: 'destreinado',
        trainingValue: 0,
        bonus: 0,
        attribute: 'destreza',
        trainingRestriction: false,
        armorPenalty: true
      },

      {
        name: 'adestramento',
        totalValue: 0,
        training: 'destreinado',
        trainingValue: 0,
        bonus: 0,
        attribute: 'carisma',
        trainingRestriction: true,
        armorPenalty: false
      },

      {
        name: 'atletismo',
        totalValue: 0,
        training: 'destreinado',
        trainingValue: 0,
        bonus: 0,
        attribute: 'forca',
        trainingRestriction: false,
        armorPenalty: false
      },

      {
        name: 'atuacao',
        totalValue: 0,
        training: 'destreinado',
        trainingValue: 0,
        bonus: 0,
        attribute: 'carisma',
        trainingRestriction: false,
        armorPenalty: false
      },

      {
        name: 'cavalgar',
        totalValue: 0,
        training: 'destreinado',
        trainingValue: 0,
        bonus: 0,
        attribute: 'destreza',
        trainingRestriction: false,
        armorPenalty: false
      },

      {
        name: 'conhecimento',
        totalValue: 0,
        training: 'destreinado',
        trainingValue: 0,
        bonus: 0,
        attribute: 'inteligencia',
        trainingRestriction: true,
        armorPenalty: false
      },

      {
        name: 'cura',
        totalValue: 0,
        training: 'destreinado',
        trainingValue: 0,
        bonus: 0,
        attribute: 'sabedoria',
        trainingRestriction: false,
        armorPenalty: false
      },

      {
        name: 'diplomacia',
        totalValue: 0,
        training: 'destreinado',
        trainingValue: 0,
        bonus: 0,
        attribute: 'carisma',
        trainingRestriction: false,
        armorPenalty: false
      },

      {
        name: 'enganacao',
        totalValue: 0,
        training: 'destreinado',
        trainingValue: 0,
        bonus: 0,
        attribute: 'carisma',
        trainingRestriction: false,
        armorPenalty: false
      },

      {
        name: 'furtividade',
        totalValue: 0,
        training: 'destreinado',
        trainingValue: 0,
        bonus: 0,
        attribute: 'destreza',
        trainingRestriction: false,
        armorPenalty: true
      },

      {
        name: 'guerra',
        totalValue: 0,
        training: 'destreinado',
        trainingValue: 0,
        bonus: 0,
        attribute: 'inteligencia',
        trainingRestriction: true,
        armorPenalty: false
      },

      {
        name: "identificar magia",
        totalValue: 0,
        training: 'destreinado',
        trainingValue: 0,
        bonus: 0,
        attribute: "inteligencia",
        trainingRestriction: true,
        armorPenalty: false
      },

      {
        name: 'iniciativa',
        totalValue: 0,
        training: 'destreinado',
        trainingValue: 0,
        bonus: 0,
        attribute: 'destreza',
        trainingRestriction: false,
        armorPenalty: false
      },

      {
        name: 'intimidacao',
        totalValue: 0,
        training: 'destreinado',
        trainingValue: 0,
        bonus: 0,
        attribute: 'carisma',
        trainingRestriction: false,
        armorPenalty: false
      },

      {
        name: 'jogatina',
        totalValue: 0,
        training: 'destreinado',
        trainingValue: 0,
        bonus: 0,
        attribute: 'carisma',
        trainingRestriction: true,
        armorPenalty: false
      },

      {
        name: 'ladinagem',
        totalValue: 0,
        training: 'destreinado',
        trainingValue: 0,
        bonus: 0,
        attribute: 'destreza',
        trainingRestriction: true,
        armorPenalty: true
      },

      {
        name: 'luta',
        totalValue: 0,
        training: 'destreinado',
        trainingValue: 0,
        bonus: 0,
        attribute: 'forca',
        trainingRestriction: false,
        armorPenalty: false
      },

      {
        name: 'misticismo',
        totalValue: 0,
        training: 'destreinado',
        trainingValue: 0,
        bonus: 0,
        attribute: 'inteligencia',
        trainingRestriction: true,
        armorPenalty: false
      },

      {
        name: 'nobreza',
        totalValue: 0,
        training: 'destreinado',
        trainingValue: 0,
        bonus: 0,
        attribute: 'inteligencia',
        trainingRestriction: true,
        armorPenalty: false
      },

      {
        name: "obter informacao",
        totalValue: 0,
        training: "destreinado",
        trainingValue: 0,
        bonus: 0,
        attribute: "carisma",
        trainingRestriction: false,
        armorPenalty: false
      },

      {
        name: 'oficio',
        totalValue: 0,
        training: 'destreinado',
        trainingValue: 0,
        bonus: 0,
        attribute: 'inteligencia',
        trainingRestriction: true,
        armorPenalty: false
      },

      {
        name: "percepcao",
        totalValue: 0,
        bonus: 0,
        training: "destreinado",
        trainingValue: 0,
        attribute: "sabedoria",
        trainingRestriction: false,
        armorPenalty: false
      },

      {
        name: 'pilotagem',
        totalValue: 0,
        training: 'destreinado',
        trainingValue: 0,
        bonus: 0,
        attribute: 'destreza',
        trainingRestriction: true,
        armorPenalty: false
      },

      {
        name: 'pontaria',
        totalValue: 0,
        training: 'destreinado',
        trainingValue: 0,
        bonus: 0,
        attribute: 'destreza',
        trainingRestriction: false,
        armorPenalty: false
      },

      {
        name: 'religiao',
        totalValue: 0,
        training: 'destreinado',
        trainingValue: 0,
        bonus: 0,
        attribute: 'sabedoria',
        trainingRestriction: true,
        armorPenalty: false
      },

      {
        name: 'sobrevivencia',
        totalValue: 0,
        training: 'destreinado',
        trainingValue: 0,
        bonus: 0,
        attribute: 'sabedoria',
        trainingRestriction: false,
        armorPenalty: false
      }
    ],
    talents: [
    ],
    attacks: [
    ],
    spells: [],
    items: []
  }

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
