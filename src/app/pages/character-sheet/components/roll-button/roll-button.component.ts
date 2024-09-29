import { Component, Input } from '@angular/core';
import { RollService } from '../../services/roll.service';

@Component({
  selector: 'app-roll-button',
  standalone: true,
  imports: [],
  templateUrl: './roll-button.component.html',
  styleUrl: './roll-button.component.sass'
})
export class RollButtonComponent {

  constructor(protected rs : RollService){}

  @Input() valor:number = 0
  
  playAudio(){
    const diceRoll = <HTMLAudioElement>document.getElementById("dice-roll")
    diceRoll.play()
  }
}
