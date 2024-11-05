import { Component, Input } from '@angular/core';
import { Skill } from '../../../../core/models/skill';
import { SkillComponent } from "../../components/skill/skill.component";

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [SkillComponent],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.sass'
})
export class SkillsComponent {

  @Input() skills : Skill[] | null = null
}
