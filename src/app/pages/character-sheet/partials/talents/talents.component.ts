import {Component, Input} from '@angular/core';
import { TalentComponent } from '../../components/talent/talent.component';
import { CharacterService } from '../../services/character.service';
import {RpgCharacter} from "../../../../core/models/character";

@Component({
  selector: 'app-talents',
  standalone: true,
  imports: [TalentComponent],
  templateUrl: './talents.component.html',
  styleUrl: './talents.component.sass'
})
export class TalentsComponent {

  @Input() character: RpgCharacter | null = null
}
