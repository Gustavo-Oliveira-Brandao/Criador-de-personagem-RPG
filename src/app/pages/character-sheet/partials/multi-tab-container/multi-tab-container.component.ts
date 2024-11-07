import { Component, Input } from '@angular/core';
import { RpgCharacter } from '../../../../core/models/character';
import { SkillComponent } from "../../components/skill/skill.component";
import { ActionsTabComponent } from "../actions-tab/actions-tab.component";
import { TalentsTabComponent } from "../talents-tab/talents-tab.component";

@Component({
  selector: 'app-multi-tab-container',
  standalone: true,
  imports: [SkillComponent, ActionsTabComponent, TalentsTabComponent],
  templateUrl: './multi-tab-container.component.html',
  styleUrl: './multi-tab-container.component.sass'
})
export class MultiTabContainerComponent {

  @Input() character : RpgCharacter | null = null

  tab : string = "actions"

  changeTab(tab : string){
    this.tab = tab
  }
}
