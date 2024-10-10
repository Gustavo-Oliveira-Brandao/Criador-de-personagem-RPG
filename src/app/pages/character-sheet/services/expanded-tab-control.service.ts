import { Injectable } from '@angular/core';
import { IAttack } from '../../../core/models/i-attack';
import { ISpell } from '../../../core/models/i-spell';
import { ISkill } from '../../../core/models/i-skill';
import { IAttribute } from '../../../core/models/i-attribute';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CharacterService } from './character.service';
import { IFormData } from '../../../core/models/i-form-data';

@Injectable({
  providedIn: 'root'
})
export class ExpandedTabControlService {

  constructor(private character: CharacterService) {

  }

  tab: string = ""
  isOpened: boolean = false
  title: string = ""
  category: string = ""

  action: string = ""

  choosenAttack !: IAttack
  choosenSpell !: ISpell
  choosenSkill: ISkill = this.character.skills[0]
  choosenAttr: IAttribute = this.character.attributes[0]

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

}