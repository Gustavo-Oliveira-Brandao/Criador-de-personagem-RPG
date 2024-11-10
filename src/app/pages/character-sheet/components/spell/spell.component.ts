import { Component } from '@angular/core';
import { Spell } from '../../../../core/models/spell';

@Component({
  selector: 'app-spell',
  standalone: true,
  imports: [],
  templateUrl: './spell.component.html',
  styleUrl: './spell.component.sass'
})
export class SpellComponent {

  isExpanded : boolean = false

  expand(){
    this.isExpanded = !this.isExpanded
  }

  spell : Spell = {
    id:  1,
    name: "Bola de fogo",
    spellRange: "Corpo a corpo",
    spellListName: "Divina",
    schoolName: "Evocação",
    execution: "Ação padrão",
    target: "Multiplos alvos",
    duration: "Instantâneo",
    savingThrow: "Reflexos",
    area: "40 pés",
    description: "Esta famosa magia de ataque cria uma poderosa explosão, causando 6d6 pontos de dano de fogo em todas as criaturas e objetos livres na área. +2 PM: aumenta o dano em +2d6. +2 PM: muda a área para efeito de esfera flamejante com tamanho Médio e a duração para cena. Em vez do normal, cria uma esfera flamejante com 1,5m de diâmetro que causa 3d6 pontos de dano a qualquer criatura no mesmo espaço. Você pode gastar uma ação de movimento para fazer a esfera voar 9m em qualquer direção. Ela é imune a dano, mas pode ser apagada com água. Uma criatura só pode sofrer dano da esfera uma vez por rodada. +3 PM: muda a duração para um dia ou até ser descarregada. Em vez do normal, você cria uma pequena pedra flamejante, que pode detonar como uma reação, descarregando a magia. A pedra pode ser usada como uma arma de arremesso com alcance curto. Uma vez detonada, causa o dano da magia numa área de esfera com 6m de raio.",
    spellUpgrades: [
      {
        id: 1,
        cost: 3,
        description: "Voce aumenta o dano em 1d6"
      },
      {
        id: 2,
        cost: 3,
        description: "Voce aumenta o dano em 1d6"
      }
    ],
    damages: [
      {
        diceQuantity: 8,
        diceSize: 6,
        damageType: "fogo",
        damageAttribute: "Carisma"
      }
    ]
  }
}
