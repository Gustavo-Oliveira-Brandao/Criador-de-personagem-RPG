import { Injectable } from '@angular/core';
import { ISpell } from '../../../core/models/i-spell';
import { CharacterService } from './character.service';
import { IAttack } from '../../../core/models/i-attack';
import { ISkill } from '../../../core/models/i-skill';
import { IAttribute } from '../../../core/models/i-attribute';

@Injectable({
  providedIn: 'root'
})
export class ExpandedTabControlService {

  constructor(private readonly character: CharacterService) {

  }

  tab: string = ""
  isOpened: boolean = false
  title: string = ""
  category: string = ""

  action: string = ""

  choosenAttack !: IAttack
  choosenSpell !: ISpell
  choosenSkill: ISkill = this.character.build.skills[0]
  choosenAttr: IAttribute = this.character.build.attributes[0]

  index: number = 0

  open() {
    this.isOpened = false
    setTimeout(() => {
      this.isOpened = true
    }, 1);
  }

  trainingData = [
    {
      key: "destreinado",
      value: "Destreinado"
    },
    {
      key: "treinado",
      value: "Treinado"
    }
  ]

  attrData = [
    {
      key: "forca",
      value: "Força"
    },
    {
      key: "destreza",
      value: "Destreza"
    },
    {
      key: "constituicao",
      value: "Constituição"
    },
    {
      key: "inteligencia",
      value: "Inteligência"
    },
    {
      key: "sabedoria",
      value: "Sabedoria"
    },
    {
      key: "carisma",
      value: "Carisma"
    }
  ]

  damageTypeData = [
    {
      key: "cortante",
      value: "Cortante"
    },
    {
      key: "perfurante",
      value: "Perfurante"
    },
    {
      key: "concussao",
      value: "Concussão"
    },
    {
      key: "fogo",
      value: "Fogo"
    },
    {
      key: "frio",
      value: "Frio"
    },
    {
      key: "eletrico",
      value: "Elétrico"
    }
  ]

}