import { Component, Input } from '@angular/core';
import { RollButtonComponent } from "../roll-button/roll-button.component";
import { Attribute } from '../../../../core/models/attribute';
import { Skill } from '../../../../core/models/skill';

@Component({
  selector: 'app-smaller-container-with-dice-roll',
  standalone: true,
  imports: [RollButtonComponent],
  templateUrl: './smaller-container-with-dice-roll.component.html',
  styleUrl: './smaller-container-with-dice-roll.component.sass'
})
export class SmallerContainerWithDiceRollComponent {

  constructor() { }

  @Input() attribute!: Attribute | Skill


}
