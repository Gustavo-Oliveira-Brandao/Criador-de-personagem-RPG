import { Component, Input } from '@angular/core';
import { Skill } from '../../../../core/models/skill';
import { RollButtonComponent } from "../roll-button/roll-button.component";

@Component({
  selector: 'app-skill',
  standalone: true,
  imports: [RollButtonComponent],
  templateUrl: './skill.component.html',
  styleUrl: './skill.component.sass'
})
export class SkillComponent {

  @Input() skill : Skill | null = null
}
