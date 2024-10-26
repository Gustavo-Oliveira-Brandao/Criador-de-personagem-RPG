import {Component, Input} from '@angular/core';
import { AttributeComponent } from '../../components/attribute/attribute.component';

import { CharacterService } from '../../services/character.service';
import {RpgCharacter} from "../../../../core/models/character";

@Component({
  selector: 'app-attributes',
  standalone: true,
  imports: [AttributeComponent],
  templateUrl: './attributes.component.html',
  styleUrl: './attributes.component.sass'
})
export class AttributesComponent {

  @Input() character: RpgCharacter | null = null
  constructor(){}

}
