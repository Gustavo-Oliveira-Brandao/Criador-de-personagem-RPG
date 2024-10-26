import {Component, Input} from '@angular/core';
import { DetailButtonComponent } from "../../components/detail-button/detail-button.component";
import { CharacterService } from '../../services/character.service';
import {RpgCharacter} from "../../../../core/models/character";


@Component({
  selector: 'app-details',
  standalone: true,
  imports: [DetailButtonComponent],
  templateUrl: './details.component.html',
  styleUrl: './details.component.sass'
})
export class DetailsComponent {

  @Input() character: RpgCharacter | null = null
  constructor(){}

}
