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

  status = {
    actualPv: 0,
    maxPv: 1,
    actualMp: 0,
    maxMp: 0,
    temporaryPv: 0,
    ac: 10
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

  perception: ISkill = {
    name: "PERCEPÇÃO",
    value: 0,
    bonus: 0,
    training: "destreinado",
    trainingValue: 0,
    attribute: "sabedoria"

  }

  savingThrows: ISkill[] = [
    {
      name: "fortitude",
      value: 0,
      bonus: 0,
      training: "destreinado",
      trainingValue: 0,
      attribute: "constituicao"
    },
    {
      name: "reflexos",
      value: 0,
      bonus: 0,
      training: "destreinado",
      trainingValue: 0,
      attribute: "destreza"
    },
    {
      name: "vontade",
      value: 0,
      bonus: 0,
      training: "destreinado",
      trainingValue: 0,
      attribute: "sabedoria"
    }
  ]

  skills: ISkill[] = [
    {
      name: 'acrobacia',
      value: 0,
      training: 'treinado',
      trainingValue: 0,
      bonus: 0,
      attribute: 'destreza'
    },

    {
      name: 'adestramento',
      value: 0,
      training: 'destreinado',
      trainingValue: 0,
      bonus: 0,
      attribute: 'carisma'
    },

    {
      name: 'atletismo',
      value: 0,
      training: 'treinado',
      trainingValue: 0,
      bonus: 0,
      attribute: 'forca'
    },

    {
      name: 'atuacao',
      value: 0,
      training: 'destreinado',
      trainingValue: 0,
      bonus: 0,
      attribute: 'carisma'
    },

    {
      name: 'cavalgar',
      value: 0,
      training: 'treinado',
      trainingValue: 0,
      bonus: 0,
      attribute: 'destreza'
    },

    {
      name: 'conhecimento',
      value: 0,
      training: 'destreinado',
      trainingValue: 0,
      bonus: 0,
      attribute: 'inteligencia'
    },

    {
      name: 'cura',
      value: 0,
      training: 'destreinado',
      trainingValue: 0,
      bonus: 0,
      attribute: 'sabedoria'
    },

    {
      name: 'diplomacia',
      value: 0,
      training: 'destreinado',
      trainingValue: 0,
      bonus: 0,
      attribute: 'carisma'
    },

    {
      name: 'enganacao',
      value: 0,
      training: 'destreinado',
      trainingValue: 0,
      bonus: 0,
      attribute: 'carisma'
    },

    {
      name: 'furtividade',
      value: 0,
      training: 'destreinado',
      trainingValue: 0,
      bonus: 0,
      attribute: 'destreza'
    },

    {
      name: 'guerra',
      value: 0,
      training: 'destreinado',
      trainingValue: 0,
      bonus: 0,
      attribute: 'inteligencia'
    },

    {
      name: 'iniciativa',
      value: 0,
      training: 'treinado',
      trainingValue: 0,
      bonus: 0,
      attribute: 'destreza'
    },

    {
      name: 'intimidacao',
      value: 0,
      training: 'destreinado',
      trainingValue: 0,
      bonus: 0,
      attribute: 'carisma'
    },

    {
      name: 'jogatina',
      value: 0,
      training: 'destreinado',
      trainingValue: 0,
      bonus: 0,
      attribute: 'carisma'
    },

    {
      name: 'ladinagem',
      value: 0,
      training: 'destreinado',
      trainingValue: 0,
      bonus: 0,
      attribute: 'destreza'
    },

    {
      name: 'luta',
      value: 0,
      training: 'destreinado',
      trainingValue: 0,
      bonus: 0,
      attribute: 'forca'
    },

    {
      name: 'misticismo',
      value: 0,
      training: 'destreinado',
      trainingValue: 0,
      bonus: 0,
      attribute: 'inteligencia'
    },

    {
      name: 'nobreza',
      value: 0,
      training: 'destreinado',
      trainingValue: 0,
      bonus: 0,
      attribute: 'inteligencia'
    },

    {
      name: 'oficio',
      value: 0,
      training: 'destreinado',
      trainingValue: 0,
      bonus: 0,
      attribute: 'inteligencia'
    },

    {
      name: 'pilotagem',
      value: 0,
      training: 'destreinado',
      trainingValue: 0,
      bonus: 0,
      attribute: 'destreza'
    },

    {
      name: 'pontaria',
      value: 0,
      training: 'destreinado',
      trainingValue: 0,
      bonus: 0,
      attribute: 'destreza'
    },

    {
      name: 'religiao',
      value: 0,
      training: 'destreinado',
      trainingValue: 0,
      bonus: 0,
      attribute: 'sabedoria'
    },

    {
      name: 'sobrevivencia',
      value: 0,
      training: 'destreinado',
      trainingValue: 0,
      bonus: 0,
      attribute: 'sabedoria'
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

  updateSkillsValues() {
    for (let skill of this.skills) {
      let attributeModifier = 0
      for (let attribute of this.attributes) {
        if (attribute.name == skill.attribute) {
          attributeModifier = attribute.value
        }
      }

      if(skill.training == "destreinado"){
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
      skill.value = Math.floor(this.details.level / 2) + skill.bonus + skill.trainingValue + attributeModifier
    }
  }
}
