import { Component } from '@angular/core';
import { AttributeComponent } from '../../components/attribute/attribute.component';

import { CharacterService } from '../../services/character.service';

@Component({
  selector: 'app-attributes',
  standalone: true,
  imports: [AttributeComponent],
  templateUrl: './attributes.component.html',
  styleUrl: './attributes.component.sass'
})
export class AttributesComponent {

  constructor(protected character : CharacterService){}

}
