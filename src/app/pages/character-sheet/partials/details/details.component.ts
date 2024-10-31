import {Component, Input} from '@angular/core';
import {RpgCharacter} from "../../../../core/models/character";
import {ModularBtnComponent} from "../../../../shared/components/modular-btn/modular-btn.component";


@Component({
  selector: 'app-details',
  standalone: true,
  imports: [ModularBtnComponent],
  templateUrl: './details.component.html',
  styleUrl: './details.component.sass'
})
export class DetailsComponent {

  @Input() character: RpgCharacter | null = null
  constructor(){}

}
