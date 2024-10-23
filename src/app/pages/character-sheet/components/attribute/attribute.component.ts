import { Component, Input } from '@angular/core';
import { RollButtonComponent } from "../roll-button/roll-button.component";
import { IAttribute } from '../../../../core/models/i-attribute';
import { ISkill } from '../../../../core/models/i-skill';

@Component({
  selector: 'app-attribute',
  standalone: true,
  imports: [RollButtonComponent],
  templateUrl: './attribute.component.html',
  styleUrl: './attribute.component.sass'
})
export class AttributeComponent {

  constructor() { }

  @Input() attribute?: IAttribute
  @Input() save?: ISkill
  @Input() index !: number
  @Input() type = ""


}
