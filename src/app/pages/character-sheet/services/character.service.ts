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

  speed:number = 30
  
  perception:number = 7

  savingThrows : ISkill[] = [
    {
      name: "FORTITUDE",
      totalValue: 6,
      bonus: 0,
      training: "destreinado",
      trainingValue: 0,
      attribute: "constituicao"
    },
    {
      name: "REFLEXOS",
      totalValue: 6,
      bonus: 0,
      training: "destreinado",
      trainingValue: 0,
      attribute: "destreza"
    },
    {
      name: "VONTADE",
      totalValue: 2,
      bonus: 0,
      training: "destreinado",
      trainingValue: 0,
      attribute: "sabedoria"
    }
  ]

  skills: ISkill[] = [
    {
      name: 'acrobacia',
      totalValue: 11,
      training: 'treinado',
      trainingValue: 0,
      bonus: 0,
      attribute: 'destreza'
    },

    {
      name: 'adestramento',
      totalValue: 2,
      training: 'destreinado',
      trainingValue: 0,
      bonus: 0,
      attribute: 'carisma'
    },
    
    {
      name: 'atletismo',
      totalValue: 26,
      training: 'treinado',
      trainingValue: 0,
      bonus: 0,
      attribute: 'forca'
    },

    {
      name: 'atuacao',
      totalValue: 2,
      training: 'destreinado',
      trainingValue: 0,
      bonus: 0,
      attribute: 'carisma'
    },

    {
      name: 'cavalgar',
      totalValue: 11,
      training: 'treinado',
      trainingValue: 0,
      bonus: 0,
      attribute: 'destreza'
    },

    {
      name: 'conhecimento',
      totalValue: 3,
      training: 'destreinado',
      trainingValue: 0,
      bonus: 0,
      attribute: 'inteligencia'
    },

    {
      name: 'cura',
      totalValue: 2,
      training: 'destreinado',
      trainingValue: 0,
      bonus: 0,
      attribute: 'sabedoria'
    },

    {
      name: 'diplomacia',
      totalValue: 2,
      training: 'destreinado',
      trainingValue: 0,
      bonus: 0,
      attribute: 'carisma'
    },

    {
      name: 'enganacao',
      totalValue: 2,
      training: 'destreinado',
      trainingValue: 0,
      bonus: 0,
      attribute: 'carisma'
    },

    {
      name: 'furtividade',
      totalValue: 6,
      training: 'destreinado',
      trainingValue: 0,
      bonus: 0,
      attribute: 'destreza'
    },

    {
      name: 'guerra',
      totalValue: 0,
      training: 'destreinado',
      trainingValue: 0,
      bonus: 0,
      attribute: 'inteligencia'
    },

    {
      name: 'iniciativa',
      totalValue: 11,
      training: 'treinado',
      trainingValue: 0,
      bonus: 0,
      attribute: 'destreza'
    },

    {
      name: 'intimidacao',
      totalValue: 2,
      training: 'destreinado',
      trainingValue: 0,
      bonus: 0,
      attribute: 'carisma'
    },

    {
      name: 'jogatina',
      totalValue: 0,
      training: 'destreinado',
      trainingValue: 0,
      bonus: 0,
      attribute: 'carisma'
    },

    {
      name: 'ladinagem',
      totalValue: 6,
      training: 'destreinado',
      trainingValue: 0,
      bonus: 0,
      attribute: 'destreza'
    },

    {
      name: 'luta',
      totalValue: 0,
      training: 'destreinado',
      trainingValue: 0,
      bonus: 0,
      attribute: 'forca'
    },

    {
      name: 'misticismo',
      totalValue: 0,
      training: 'destreinado',
      trainingValue: 0,
      bonus: 0,
      attribute: 'inteligencia'
    },

    {
      name: 'nobreza',
      totalValue: 0,
      training: 'destreinado',
      trainingValue: 0,
      bonus: 0,
      attribute: 'inteligencia'
    },

    {
      name: 'oficio',
      totalValue: 3,
      training: 'destreinado',
      trainingValue: 0,
      bonus: 0,
      attribute: 'inteligencia'
    },

    {
      name: 'pilotagem',
      totalValue: 0,
      training: 'destreinado',
      trainingValue: 0,
      bonus: 0,
      attribute: 'destreza'
    },

    {
      name: 'pontaria',
      totalValue: 0,
      training: 'destreinado',
      trainingValue: 0,
      bonus: 0,
      attribute: 'destreza'
    },

    {
      name: 'religiao',
      totalValue: 0,
      training: 'destreinado',
      trainingValue: 0,
      bonus: 0,
      attribute: 'sabedoria'
    },

    {
      name: 'sobrevivencia',
      totalValue: 2,
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
