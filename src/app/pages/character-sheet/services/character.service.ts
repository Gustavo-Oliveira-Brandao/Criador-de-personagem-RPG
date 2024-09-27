import { Injectable } from '@angular/core';
import { ISkill } from '../../../core/models/i-skill';
import { IAttribute } from '../../../core/models/i-attribute';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor() { }


  attributes : IAttribute[] = [
    {
      name: "FORÇA",
      value: 3,
      bonus: 0
    },
    {
      name: "DESTREZA",
      value: 4,
      bonus: 0
    },
    {
      name: "CONSTITUIÇÃO",
      value: 4,
      bonus: 0
    },
    {
      name: "INTELIGÊNCIA",
      value: 1,
      bonus: 0
    },
    {
      name: "SABEDORIA",
      value: 0,
      bonus: 0
    },
    {
      name: "CARISMA",
      value: 0,
      bonus: 0
    }

  ]

  speed = {
    name: "DESLOCAMENTO",
    value: 30
  }
  
  perception : ISkill = {
    name: "PERCEPÇÃO",
    value: 0,
    bonus: 0,
    training: "destreinado",
    trainingValue: 0,
    attribute: "sabedoria"

  }

  savingThrows : ISkill[] = [
    {
      name: "FORTITUDE",
      value: 6,
      bonus: 0,
      training: "destreinado",
      trainingValue: 0,
      attribute: "constituicao"
    },
    {
      name: "REFLEXOS",
      value: 6,
      bonus: 0,
      training: "destreinado",
      trainingValue: 0,
      attribute: "destreza"
    },
    {
      name: "VONTADE",
      value: 2,
      bonus: 0,
      training: "destreinado",
      trainingValue: 0,
      attribute: "sabedoria"
    }
  ]

  skills: ISkill[] = [
    {
      name: 'acrobacia',
      value: 11,
      training: 'treinado',
      trainingValue: 0,
      bonus: 0,
      attribute: 'destreza'
    },

    {
      name: 'adestramento',
      value: 2,
      training: 'destreinado',
      trainingValue: 0,
      bonus: 0,
      attribute: 'carisma'
    },
    
    {
      name: 'atletismo',
      value: 26,
      training: 'treinado',
      trainingValue: 0,
      bonus: 0,
      attribute: 'forca'
    },

    {
      name: 'atuacao',
      value: 2,
      training: 'destreinado',
      trainingValue: 0,
      bonus: 0,
      attribute: 'carisma'
    },

    {
      name: 'cavalgar',
      value: 11,
      training: 'treinado',
      trainingValue: 0,
      bonus: 0,
      attribute: 'destreza'
    },

    {
      name: 'conhecimento',
      value: 3,
      training: 'destreinado',
      trainingValue: 0,
      bonus: 0,
      attribute: 'inteligencia'
    },

    {
      name: 'cura',
      value: 2,
      training: 'destreinado',
      trainingValue: 0,
      bonus: 0,
      attribute: 'sabedoria'
    },

    {
      name: 'diplomacia',
      value: 2,
      training: 'destreinado',
      trainingValue: 0,
      bonus: 0,
      attribute: 'carisma'
    },

    {
      name: 'enganacao',
      value: 2,
      training: 'destreinado',
      trainingValue: 0,
      bonus: 0,
      attribute: 'carisma'
    },

    {
      name: 'furtividade',
      value: 6,
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
      value: 11,
      training: 'treinado',
      trainingValue: 0,
      bonus: 0,
      attribute: 'destreza'
    },

    {
      name: 'intimidacao',
      value: 2,
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
      value: 6,
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
      value: 3,
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
      value: 2,
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
}
