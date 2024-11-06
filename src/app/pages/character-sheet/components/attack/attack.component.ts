import { Component, Input } from '@angular/core';
import { Attack } from '../../../../core/models/attack';
import { RollButtonComponent } from "../roll-button/roll-button.component";

@Component({
  selector: 'app-attack',
  standalone: true,
  imports: [RollButtonComponent],
  templateUrl: './attack.component.html',
  styleUrl: './attack.component.sass'
})
export class AttackComponent {

/*   @Input() attack: Attack | null = null */

  attack : Attack = {
    id: 1,
    name: "Espada grande",
    attackRange: "corpo a corpo",
    rangeInMeters: 30,
    toHit: 10,
    toHitSkill: "luta",
    modifiers: [
    ],
    critMultiplier: 30,
    critMargin: 30,
    damages: [{
      diceQuantity: 3,
      diceSize: 8,
      damageType: "cortante",
      modifiers: [],
      totalBonus: 15,
      damageAttribute: "forca"
    }]
  }
}

