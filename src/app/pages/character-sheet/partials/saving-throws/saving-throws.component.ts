import { Component, Input } from '@angular/core';
import { RpgCharacter } from '../../../../core/models/character';
import { SmallerContainerWithDiceRollComponent } from '../../components/smaller-container-with-dice-roll/smaller-container-with-dice-roll.component';

@Component({
  selector: 'app-saving-throws',
  standalone: true,
  imports: [SmallerContainerWithDiceRollComponent],
  templateUrl: './saving-throws.component.html',
  styleUrl: './saving-throws.component.sass'
})
export class SavingThrowsComponent {

  @Input() character : RpgCharacter | null = null
}
