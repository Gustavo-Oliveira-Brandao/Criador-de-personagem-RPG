import { Component } from '@angular/core';
import { TalentComponent } from '../../components/talent/talent.component';
import { CharacterService } from '../../services/character.service';

@Component({
  selector: 'app-talents',
  standalone: true,
  imports: [TalentComponent],
  templateUrl: './talents.component.html',
  styleUrl: './talents.component.sass'
})
export class TalentsComponent {

  constructor(protected character : CharacterService){}
}
