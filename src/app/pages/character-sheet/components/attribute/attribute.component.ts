import { Component, Input } from '@angular/core';
import { RollButtonComponent } from "../roll-button/roll-button.component";
import { Attribute } from '../../../../core/models/attribute';
import { Skill } from '../../../../core/models/skill';

@Component({
  selector: 'app-attribute',
  standalone: true,
  imports: [RollButtonComponent],
  templateUrl: './attribute.component.html',
  styleUrl: './attribute.component.sass'
})
export class AttributeComponent {

  constructor() { }

  @Input() attribute?: Attribute
  @Input() save?: Skill
  @Input() index !: number
  @Input() type = ""


}
